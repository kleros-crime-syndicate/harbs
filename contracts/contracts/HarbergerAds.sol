// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/ERC20/IERC20.sol";

contract HarbergerAds is IHarbergerAds {
  struct Ad {
    uint256 valuation; // current value
    uint256 valuationChangeTimestamp; // must be set any time valuation changes
    uint256 taxDueTimestamp; // taxes are paid on collect and meaningful interactions (value change, buys...) 
    address owner;
  }

  event AdSet(uint256 _tokenId, string _ipfsUri);

  uint256 immutable taxRate;
  uint256 constant DIVIDER = 10_000;

  IERC20 immutable currency;
  address immutable collector; // recipient of the taxes

  mapping(uint256 => Ad) ads;

  constructor(uint256 _taxRate, IERC20 _currency) {
    taxRate = _taxRate;
    currency = _currency;
  }

  // edge cases:
  // if due taxes cannot be paid, the buyer gets ownership of the item and doesnt have to pay.

  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation) external {

  }

  function collect(uint256 _tokenId) external {

  }

  function revoke(uint256 _tokenId) external {

  }

  function changeValuation(uint256 _tokenId, uint256 _valuation) external {

  }

  function setAd(uint256 _tokenId, string _ipfsUri) external {

  }
}