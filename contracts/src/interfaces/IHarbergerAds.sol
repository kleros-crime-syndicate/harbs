// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./IHarberger.sol";

interface IHarbergerAds is IHarberger {
  function setAd(uint256 _tokenId, string calldata _ipfsUri) external;
}
