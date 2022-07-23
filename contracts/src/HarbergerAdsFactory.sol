// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./HarbergerAds.sol";

contract HarbergerAdsFactory {

  event CollectionCreated(
    HarbergerAds _address,
    uint256 _adCount,
    uint256 _taxRate,
    uint256 _cooldownPeriod,
    IERC20 _currency,
    address _collector
  );

  function create(uint256 _adCount, uint256 _taxRate, uint256 _cooldownPeriod, IERC20 _currency, address _collector, string calldata _name, string calldata _symbol, string calldata _tokenURI) public {
    HarbergerAds harbergerAdsContract = new HarbergerAds(_adCount, _taxRate, _cooldownPeriod, _currency, _collector, _name, _symbol, _tokenURI);
{    emit CollectionCreated(harbergerAdsContract, _adCount, _taxRate, _cooldownPeriod, _currency, _collector);
}  }
}
