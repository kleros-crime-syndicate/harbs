// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IHarberger is IERC721 {

  // owner == address(0): revoked
  event TokenBought(uint256 indexed _tokenId, address indexed _owner, uint256 _amount);

  // emits the last known fund amount
  event TokenFunded(uint256 indexed _tokenId, uint256 _amount);

  event ValuationSet(uint256 indexed _tokenId, uint256 _valuation);
  
  event TaxPaid(uint256 indexed _tokenId, uint256 _value);

  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation, uint256 _fund) external;

  function fund(uint256 _tokenId, uint256 _value) external;

  function defund(uint256 _tokenId, uint256 _value) external;
  
  function revoke(uint256 _tokenId) external;

  function collect(uint256 _tokenId) external;
  
  function changeValuation(uint256 _tokenId, uint256 _valuation) external;
}