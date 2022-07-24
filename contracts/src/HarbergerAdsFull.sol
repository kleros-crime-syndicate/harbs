// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interfaces/IHarbergerAds.sol";

contract HarbergerAdsFull is IHarbergerAds, ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    struct Ad {
        address owner;
        uint256 valuation; // current valuation of the item.
        uint256 fund; // after revoking, due is substracted and then refunded to owner.
        uint256 lastPaidTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...)
        uint256 nextValuationTimestamp; // must be set any time valuation changes
    }

    uint256 public constant DIVIDER = 10_000;
    uint256 public immutable taxRate; // rate times divider, per year.
    uint256 public immutable cooldownPeriod; // certain actions need the cooldownPeriod to elapse
    IERC20 public immutable currency;
    address public immutable collector; // recipient of the taxes

    mapping(uint256 => Ad) public ads;
    mapping(address => uint256) public adsBalanceOf;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor(
        uint256 _taxRate,
        uint256 _cooldownPeriod,
        IERC20 _currency,
        address _collector,
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        taxRate = _taxRate;
        currency = _currency;
        cooldownPeriod = _cooldownPeriod;
        collector = _collector;
    }

    /// HARBERGER

    // edge cases:
    // if due taxes cannot be paid, the buyer buys the item from collector.

    function buy(
        uint256 _tokenId,
        uint256 _offer,
        uint256 _valuation,
        uint256 _fund
    ) external override {
        Ad storage ad = ads[_tokenId];
        require(_tokenId < totalSupply(), "Not existing");
        require(ad.owner != msg.sender, "Can't buy your own ad");
        // check if item has enough funds to pay taxes
        uint256 amountDue = dueTaxes(_tokenId);
        address oldOwner = ad.owner;
        if (amountDue > ad.fund) {
            // there's not enough to pay. item no longer belongs to original owner.
            // send whatever's left to the collector
            _payTax(_tokenId, ad.fund);
            // buy from collector
            currency.transferFrom(msg.sender, collector, _offer);
        } else {
            // check if offer is over valuation
            require(ad.valuation <= _offer, "Lowball offer");
            // cool, proceed to buy the item
            // first, original owner pays due taxes
            _payTax(_tokenId, ad.fund); // updates ad.fund
            // reimburse remainder
            if (ad.owner != address(0)) {
                currency.transfer(ad.owner, ad.fund);
            }

            // buy the item from previous owner
            require(
                currency.transferFrom(msg.sender, ad.owner == address(0x0) ? collector : ad.owner, _offer),
                "Bad transfer"
            );
        }
        // is new fund enough?
        require(_fund >= minimumFund(_valuation), "Not enough funds");
        require(currency.transferFrom(msg.sender, address(this), _fund), "Bad transfer");

        if (ad.owner != address(0)) {
            adsBalanceOf[ad.owner] -= 1;
        }

        // set the ad data
        ad.owner = msg.sender;
        ad.fund = _fund;
        ad.valuation = _valuation;
        ad.nextValuationTimestamp = block.timestamp + cooldownPeriod;
        ad.lastPaidTimestamp = block.timestamp;

        adsBalanceOf[msg.sender] += 1;

        emit Transfer(oldOwner, msg.sender, _tokenId);
        emit ValuationSet(_tokenId, _valuation);
        emit TokenFunded(_tokenId, _fund);
    }

    function fund(uint256 _tokenId, uint256 _value) external override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];

        require(currency.transferFrom(msg.sender, address(this), _value), "Bad transfer");
        ad.fund += _value;

        emit TokenFunded(_tokenId, ad.fund);
    }

    function defund(uint256 _tokenId, uint256 _value) external override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        require(ad.owner == msg.sender, "Not owner");
        require(block.timestamp >= ad.nextValuationTimestamp, "Wait more time");
        // check available amount
        uint256 amountDue = dueTaxes(_tokenId);
        if (amountDue <= ad.fund) {
            // there is something remaining for defund.
            _payTax(_tokenId, amountDue); // updates the fund
            if (_value < ad.fund) {
                ad.fund -= _value;
                currency.transfer(ad.owner, _value);
                emit TokenFunded(_tokenId, ad.fund);
            } else {
                // defund all available, but revoke the item too.
                currency.transfer(ad.owner, ad.fund);
                _revoke(_tokenId);
            }
        } else {
            // there's not enough to pay the owed taxes. pay everything to collector.
            currency.transfer(collector, ad.fund);
            // now revoke
            _revoke(_tokenId);
        }
    }

    function revoke(uint256 _tokenId) external override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        require(ad.owner == msg.sender, "Not owner");
        // check available amount
        uint256 amountDue = dueTaxes(_tokenId);
        if (amountDue <= ad.fund) {
            _payTax(_tokenId, amountDue); // updates ad.fund
            // defund all available, but revoke the item too.
            currency.transfer(ad.owner, ad.fund);
        } else {
            // there's not enough to pay the owed taxes. pay everything to collector.
            currency.transfer(collector, ad.fund);
        }

        _revoke(_tokenId);
    }

    function changeValuation(uint256 _tokenId, uint256 _valuation) external override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        require(ad.owner == msg.sender, "Only owner");
        if (ad.valuation > _valuation) {
            // to decrease valuation, you need to pass the period
            require(block.timestamp >= ad.nextValuationTimestamp, "Too soon to decrease");
        }
        collect(_tokenId); // covers edge cases

        ad.valuation = _valuation;
        ad.nextValuationTimestamp = block.timestamp + cooldownPeriod;

        emit ValuationSet(_tokenId, _valuation);
    }

    function setAd(uint256 _tokenId, string calldata _uri) external override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        require(ad.owner == msg.sender, "Only owner changes ad");

        emit AdSet(_tokenId, _uri);
    }

    function collect(uint256 _tokenId) public override {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        uint256 taxes = dueTaxes(_tokenId);
        if (taxes >= ad.fund) {
            // there's not enough to pay the owed taxes. pay everything to collector.
            currency.transfer(collector, ad.fund);
            // now revoke
            _revoke(_tokenId);
        } else {
            // there's enough to pay the owed taxes. pay only due taxes to collector.
            _payTax(_tokenId, taxes); // updates ad.fund
        }
    }

    /// INTERNAL FUNCTIONS

    function _revoke(uint256 _tokenId) internal {
        // revokes the item.
        Ad storage ad = ads[_tokenId];
        address oldOwner = ad.owner;
        ad.fund = 0;
        ad.owner = collector;
        ad.valuation = 0;

        adsBalanceOf[msg.sender] -= 1;

        emit ValuationSet(_tokenId, 0);
        emit TokenFunded(_tokenId, 0);
        emit Transfer(oldOwner, address(0), _tokenId);
    }

    function _payTax(uint256 _tokenId, uint256 _amount) internal {
        Ad storage ad = ads[_tokenId];
        ad.fund -= _amount;
        ad.lastPaidTimestamp = block.timestamp;
        emit TaxPaid(_tokenId, _amount);
        currency.transfer(collector, _amount);
    }

    /// VIEW FUNCTIONS

    function dueTaxes(uint256 _tokenId) public view returns (uint256) {
        require(_tokenId < totalSupply(), "Not existing");
        Ad storage ad = ads[_tokenId];
        uint256 rate = taxesPerSecond(ad.valuation);
        return (rate * (block.timestamp - ad.lastPaidTimestamp));
    }

    function taxesPerSecond(uint256 _value) public view returns (uint256) {
        // figures out dynamically how much is owed per second
        uint256 perYear = (_value * taxRate) / DIVIDER;
        return perYear / 31_536_000; // <-- some tokens will go to zero like this lol
    }

    function minimumFund(uint256 _value) public view returns (uint256) {
        uint256 rate = taxesPerSecond(_value);
        return rate * 2_628_000;
    }

    /// ERC-721

    function safeMint(address _to, string memory _uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(IERC165, ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
