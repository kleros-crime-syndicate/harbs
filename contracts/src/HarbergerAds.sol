// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IHarbergerAds.sol";

contract HarbergerAds is IHarbergerAds {
  struct Ad {
    address owner;
    uint256 valuation; // current valuation of the item.
    uint256 fund; // after revoking, due is substracted and then refunded to owner.
    uint256 lastPaidTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...)
    uint256 nextValuationTimestamp; // must be set any time valuation changes
  }

  event AdSet(uint256 tokenId, string uri);
  event ValuationChanged(uint256 tokenId, uint256 valuation);
  event AdFundChanged(uint256 tokenId, uint256 value);
  event TaxPaid(uint256 tokenId, uint256 value);

  uint256 immutable public taxRate; // rate times divider, per year.
  uint256 constant public DIVIDER = 10_000;

  uint256 immutable public cooldownPeriod; // certain actions need the cooldownPeriod to elapse

  uint256 immutable public adCount; // number of tokens

  IERC20 immutable public currency;
  address immutable public collector; // recipient of the taxes

  mapping(uint256 => Ad) public ads;
  mapping(address => uint256) public balances;

  constructor(uint256 _adCount, uint256 _taxRate, uint256 _cooldownPeriod, IERC20 _currency, address _collector) {
    adCount = _adCount;
    taxRate = _taxRate;
    currency = _currency;
    cooldownPeriod = _cooldownPeriod;
    collector = _collector;
  }

  // edge cases:
  // if due taxes cannot be paid, the buyer gets ownership of the item and doesnt have to pay.

  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation, uint256 _fund) override external {
    Ad storage ad = ads[_tokenId];
    require(_tokenId < adCount, "Not existing");
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
      currency.transfer(ad.owner, ad.fund);

      // buy the item from previous owner
      require(currency.transferFrom(msg.sender, ad.owner == address(0x0) ? collector : ad.owner, _offer), "Bad transfer");
    }
    // is new fund enough?
    require(_fund >= minimumFund(_valuation), "Not enough funds");
    require(currency.transferFrom(msg.sender, address(this), _fund), "Bad transfer");

    // set the ad data
    ad.owner = msg.sender;
    ad.fund = _fund;
    ad.valuation = _valuation;
    ad.nextValuationTimestamp = block.timestamp + cooldownPeriod;
    ad.lastPaidTimestamp = block.timestamp;

    emit Transfer(oldOwner, msg.sender, _tokenId);
    emit ValuationChanged(_tokenId, _valuation);
    emit AdFundChanged(_tokenId, _fund);
  }

  function fund(uint256 _tokenId, uint256 _value) override external {
    require(_tokenId < adCount, "Not existing");
    Ad storage ad = ads[_tokenId];

    require(currency.transferFrom(msg.sender, address(this), _value), "Bad transfer");
    ad.fund += _value;

    emit AdFundChanged(_tokenId, ad.fund);
  }

  function defund(uint256 _tokenId, uint256 _value) override external {
    require(_tokenId < adCount, "Not existing");
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
        emit AdFundChanged(_tokenId, ad.fund);
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

  function revoke(uint256 _tokenId) override external {
    require(_tokenId < adCount, "Not existing");
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
      // now revoke
    }

    _revoke(_tokenId);
  }

  function changeValuation(uint256 _tokenId, uint256 _valuation) override external {
    require(_tokenId < adCount, "Not existing");
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Only owner");
    if (ad.valuation > _valuation) {
      // to decrease valuation, you need to pass the period
      require(block.timestamp >= ad.nextValuationTimestamp, "Too soon to decrease");
    }
    ad.valuation = _valuation;
    ad.nextValuationTimestamp = block.timestamp + cooldownPeriod;

    emit ValuationChanged(_tokenId, _valuation);
  }

  function setAd(uint256 _tokenId, string calldata _uri) override external {
    require(_tokenId < adCount, "Not existing");
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Only owner changes ad");

    emit AdSet(_tokenId, _uri);
  }

  function collect(uint256 _tokenId) override external {
    require(_tokenId < adCount, "Not existing");
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

  /// ERC-721 STUFF

  function balanceOf(address _owner) view override external returns(uint256) {
    return (0); // do later
  }

  function ownerOf(uint256 _tokenId) view override external returns(address) {
    require(_tokenId < adCount, "Not existing");
    return (ads[_tokenId].owner);
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata _data) override external {
    revert(); // unimplemented
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId) override external {
    revert(); // unimplemented
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) override external {
    revert();
  }

  function approve(address to, uint256 tokenId) override external {
    revert();
  }

  function setApprovalForAll(address operator, bool _approved) override external {
    revert();
  }

  function getApproved(uint256 tokenId) pure override external returns (address) {
    revert();
  }

  function isApprovedForAll(address owner, address operator) pure override external returns (bool) {
    revert();
  }

  /// IERC165 STUFF
  function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
    return (interfaceId == 0x861c59cd);
  }

  /// INTERNAL FUNCTIONS

  function _revoke(uint256 _tokenId) internal {
    // revokes the item.
    Ad storage ad = ads[_tokenId];
    address oldOwner = ad.owner;
    ad.fund = 0;
    ad.owner = collector;
    ad.valuation = 0;

    emit ValuationChanged(_tokenId, 0);
    emit AdFundChanged(_tokenId, 0);
    emit Transfer(oldOwner, collector, _tokenId);
  }

  function _payTax(uint256 _tokenId, uint256 _amount) internal {
    Ad storage ad = ads[_tokenId];
    currency.transfer(collector, _amount);
    ad.fund -= _amount;
    ad.lastPaidTimestamp = block.timestamp;

    emit TaxPaid(_tokenId, _amount);
  }

  /// VIEW FUNCTIONS

  function dueTaxes(uint256 _tokenId) public view returns (uint256) {
    require(_tokenId < adCount, "Not existing");
    Ad storage ad = ads[_tokenId];
    uint256 rate = taxesPerSecond(ad.valuation);
    return (rate * (block.timestamp - ad.lastPaidTimestamp));
  }

  function taxesPerSecond(uint256 _value) public view returns (uint256) {
    // figures out dynamically how much is owed per second
    uint256 perYear = _value * taxRate / DIVIDER;
    return perYear / 31_536_000; // <-- some tokens will go to zero like this lol
  }

  function minimumFund(uint256 _value) public view returns(uint256) {
    uint256 rate = taxesPerSecond(_value);
    return rate * 2_628_000;
  }
}
