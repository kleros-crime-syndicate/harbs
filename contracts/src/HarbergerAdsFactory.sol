// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./HarbergerAds.sol";

contract HarbergerAdsFactory {
  uint256 public count;
  mapping(uint256 => HarbergerAds) public harbergerAdsContracts;

  event HarbergerAdsCreated(
    uint256 _contractId,
    HarbergerAds _address,
    uint256 _count,
    uint256 _taxRate,
    uint256 _cooldownPeriod,
    IERC20 _currency
  );

  function create(uint256 _count, uint256 _taxRate, uint256 _cooldownPeriod, IERC20 _currency) public {
    HarbergerAds harbergerAdsContract = new HarbergerAds(_count, _taxRate, _cooldownPeriod, _currency);
    harbergerAdsContracts[++count] = harbergerAdsContract;
    emit HarbergerAdsCreated(count, harbergerAdsContract, _count, _taxRate, _cooldownPeriod, _currency);
  }
}
