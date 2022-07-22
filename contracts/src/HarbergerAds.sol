// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IHarbergerAds.sol";

contract HarbergerAds is IHarbergerAds {
  struct Ad {
    uint256 valuation; // current valuation of the item.
    uint256 valuationChangeTimestamp; // must be set any time valuation changes
    uint256 lastPaidTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...)
    uint256 fund; // after revoking, due is substracted and then refunded to owner.
    address owner;
  }

  event AdSet(uint256 _tokenId, string _ipfsUri);

  uint256 immutable taxRate; // rate times divider, per year.
  uint256 constant DIVIDER = 10_000;

  uint256 immutable cooldownPeriod; // certain actions need the cooldownPeriod to elapse

  IERC20 immutable currency;
  address immutable collector; // recipient of the taxes

  mapping(uint256 => Ad) ads;
  mapping(address => uint256) balances;

  constructor(uint256 _taxRate, uint256 _cooldownPeriod, IERC20 _currency) {
    taxRate = _taxRate;
    currency = _currency;
    cooldownPeriod = _cooldownPeriod;
    collector = msg.sender;
  }

  // edge cases:
  // if due taxes cannot be paid, the buyer gets ownership of the item and doesnt have to pay.

  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation, uint256 _fund) override external {
    // check if item has enough funds to pay taxes
    Ad storage ad = ads[_tokenId];
    uint256 amountDue = dueTaxes(_tokenId);
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
      require(currency.transferFrom(msg.sender, ad.owner, _offer), "Bad transfer");
    }
    // is new fund enough?
    require(_fund >= minimumFund(_valuation), "Not enough funds");
    require(currency.transferFrom(msg.sender, address(this), _fund), "Bad transfer");

    // set the ad data
    ad.owner = msg.sender;
    ad.fund = _fund;
    ad.valuation = _valuation;
    ad.valuationChangeTimestamp = block.timestamp;
    ad.lastPaidTimestamp = block.timestamp;
  }

  function fund(uint256 _tokenId, uint256 _value) override external {
    Ad storage ad = ads[_tokenId];
    require(currency.transferFrom(msg.sender, address(this), _value), "Bad transfer");
    ad.fund += _value;
  }

  function defund(uint256 _tokenId, uint256 _value) override external {
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Not owner");
    require(block.timestamp >= ad.valuationChangeTimestamp + cooldownPeriod, "Wait more time");
    // check available amount
    uint256 amountDue = dueTaxes(_tokenId);
    if (amountDue <= ad.fund) {
      // there is something remaining for defund.
      _payTax(_tokenId, amountDue); // updates the fund
      if (_value < ad.fund) {
        ad.fund -= _value;
        currency.transfer(ad.owner, _value);
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
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Not owner");
    // check available amount
    uint256 amountDue = dueTaxes(_tokenId);
    if (amountDue <= ad.fund) {
      _payTax(_tokenId, amountDue); // updates ad.fund
      // defund all available, but revoke the item too.
      currency.transfer(ad.owner, ad.fund);
      _revoke(_tokenId);
    } else {
      // there's not enough to pay the owed taxes. pay everything to collector.
      currency.transfer(collector, ad.fund);
      // now revoke
      _revoke(_tokenId);
    }
  }

  function changeValuation(uint256 _tokenId, uint256 _valuation) override external {
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Only owner");
    if (ad.valuation > _valuation) {
      // to decrease valuation, you need to pass the period
      require(block.timestamp >= ad.valuationChangeTimestamp + cooldownPeriod, "Too soon to decrease");
    }
    ad.valuation = _valuation;
    ad.valuationChangeTimestamp = block.timestamp;
  }

  function setAd(uint256 _tokenId, string calldata _ipfsUri) override external {
    Ad storage ad = ads[_tokenId];
    require(ad.owner == msg.sender, "Only owner changes ad");
    emit AdSet(_tokenId, _ipfsUri);
  }

  function collect(uint256 _tokenId) override external {
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

  function getApproved(uint256 tokenId) view override external returns (address) {
    revert();
  }

  function isApprovedForAll(address owner, address operator) view override external returns (bool) {
    revert();
  }
  
  /// IERC165 STUFF
  function supportsInterface(bytes4 interfaceId) external view returns (bool) {
    return (interfaceId == 0x861c59cd);
  }

  /// INTERNAL FUNCTIONS

  function _revoke(uint256 _tokenId) internal {
    // revokes the item.
    Ad storage ad = ads[_tokenId];
    ad.fund = 0;
    ad.owner = address(0);
    // ad.lastPaidTimestamp doesn't matter.
    ad.valuation = 0;
    // ad.valuationChangeTimestamp doesn't matter.
  }

  function _payTax(uint256 _tokenId, uint256 _amount) internal {
    Ad storage ad = ads[_tokenId];
    currency.transfer(collector, _amount);
    ad.fund -= _amount;
    ad.lastPaidTimestamp = block.timestamp;
  }

  /// VIEW FUNCTIONS

  function dueTaxes(uint256 _tokenId) view public returns (uint256) {
    Ad storage ad = ads[_tokenId];
    uint256 rate = taxesPerSecond(ad.valuation);
    return (rate * (block.timestamp - ad.lastPaidTimestamp));
  }

  function taxesPerSecond(uint256 _value) view public returns (uint256) {
    // figures out dynamically how much is owed per second
    uint256 perYear = _value * taxRate / DIVIDER;
    return perYear / 31_536_000; // <-- some tokens will go to zero like this lol
  }

  function minimumFund(uint256 _value) view public returns(uint256) {
    uint256 rate = taxesPerSecond(_value);
    return rate * 2_628_000;
  } 
}