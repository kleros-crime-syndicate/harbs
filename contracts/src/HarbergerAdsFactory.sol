// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./HarbergerAds.sol";

contract HarbergerAdsFactory {
  
  event HarbergerAdsCreated(
    HarbergerAds _address,
    uint256 _adCount,
    uint256 _taxRate,
    uint256 _cooldownPeriod,
    IERC20 _currency,
    address _collector
  );

  function create(uint256 _adCount, uint256 _taxRate, uint256 _cooldownPeriod, IERC20 _currency, address _collector) public {
    HarbergerAds harbergerAdsContract = new HarbergerAds(_adCount, _taxRate, _cooldownPeriod, _currency, _collector);
    emit HarbergerAdsCreated(harbergerAdsContract, _adCount, _taxRate, _cooldownPeriod, _currency, _collector);
  }
}
