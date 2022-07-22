// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IHarbergerAds.sol";

abstract contract HarbergerAds is IHarbergerAds {

  // TODO: implement the IERC721 functions

  struct Ad {
    uint256 valuation; // current valuation of the item.
    uint256 valuationChangeTimestamp; // must be set any time valuation changes
    uint256 taxDueTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...)
    uint256 fund; // after revoking, due is substracted and then refunded to owner.
    address owner;
  }

  event AdSet(uint256 _tokenId, string _ipfsUri);

  uint256 immutable taxRate; // rate times divider, per year.
  uint256 constant DIVIDER = 10_000;

  IERC20 immutable currency;
  address immutable collector; // recipient of the taxes

  mapping(uint256 => Ad) ads;
  mapping(address => uint256) balances;

  constructor(uint256 _taxRate, IERC20 _currency) {
    taxRate = _taxRate;
    currency = _currency;
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
      // todo: buy and send offer to collector.

    } else {
      // check if offer is over valuation
      require(ad.valuation <= _offer, "Lowball offer");
      // cool, proceed to buy the item
      // first, original owner pays due taxes
      currency.transfer(collector, amountDue);
      // reimburse remainder
      currency.transfer(ad.owner, ad.fund - amountDue);
      
    }
  }

  function fund(uint256 _tokenId, uint256 _value) override external {
    
  }

  function defund(uint256 _tokenId, uint256 _value) override external {
    // check how much is due
    // uint256 dueTaxes = 
  }

  function revoke(uint256 _tokenId) override external {

  }

  function changeValuation(uint256 _tokenId, uint256 _valuation) override external {

  }

  function setAd(uint256 _tokenId, string calldata _ipfsUri) override external {

  }

  /// INTERNAL FUNCTIONS

  /// VIEW FUNCTIONS

  function dueTaxes(uint256 _tokenId) view public returns (uint256) {
    Ad storage ad = ads[_tokenId];
    uint256 rate = taxesPerSecond(ad.valuation);
    return (rate * (block.timestamp - ad.taxDueTimestamp));
  }

  function taxesPerSecond(uint256 _value) view public returns (uint256) {
    // figures out dynamically how much is owed per second
    uint256 perYear = _value * taxRate / DIVIDER;
    return perYear / 31536000;
  }
}