// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "./IHarberger.sol";

interface IHarbergerAds is IHarberger {
  function setAd(uint256 _tokenId, string memory _ipfsUri) external;
}
