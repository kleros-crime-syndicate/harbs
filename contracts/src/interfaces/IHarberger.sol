// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IHarberger is IERC721 {

  /// @dev emits when a token is forcibly bought through the Harberger mechanism.
  /// @param _tokenId The identifier of the token that was bought.
  /// @param _owner The owner of the token after the purchase.
  /// if equal to address(0), it means the token was revoked.
  /// @param _amount The amount that was paid in this transaction.
  event TokenBought(uint256 indexed _tokenId, address indexed _owner, uint256 _amount);

  /// @dev emits when an token is funded with currency to pay the taxes, or when this
  /// fund was updated.
  /// @param _tokenId The identifier of the token that had a fund change.
  /// @param _amount The updated amount of the fund.
  event TokenFunded(uint256 indexed _tokenId, uint256 _amount);

  /// @dev emits when the valuation of an token changes.
  /// @param _tokenId The identifier of the token whose valuation changed.
  /// @param _valuation The new valuation of the token.
  event ValuationSet(uint256 indexed _tokenId, uint256 _valuation);
  
  /// @dev emits when a token has tax paid for them.
  /// @param _tokenId The identifier of the token that was taxed.
  /// @param _value The taxes that have been paid.
  event TaxPaid(uint256 indexed _tokenId, uint256 _value);

  /// @dev buy a token. This function must succeed if 
  /// @param _tokenId The identifier of the token to buy.
  /// @param _offer The maximum amount offered to buy this token.
  /// @param _valuation The valuation the token will have after a successful purchase.
  /// @param _fund The fund put in to pay for the taxes of the token.
  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation, uint256 _fund) external;

  /// @dev call this to fund the item, to pay for the maintenance taxes.
  /// @param _tokenId The identifier of the token to fund.
  /// @param _value The amount sent to fund the token.
  function fund(uint256 _tokenId, uint256 _value) external;

  /// @dev call this to remove excess funding for the token.
  /// if the resultant fund for the token was zero, it must be revoked.
  /// @param _tokenId The identifier of the token to defund.
  /// @param _value The amount to retrieve from the token's fund.
  function defund(uint256 _tokenId, uint256 _value) external;
  
  /// @dev call this to revoke ownership of a token.
  /// @param _tokenId The identifier of the token to revoke.
  function revoke(uint256 _tokenId) external;

  /// @dev call this to manually send pending taxes to the collector.
  /// This function should be callable by any external party.
  /// @param _tokenId The identifier of the token to pay taxes for.
  function collect(uint256 _tokenId) external;
  
  /// @dev call this to change the percieved valuation of the token.
  /// @param _tokenId The identifier of the token to change valuation of.
  /// @param _valuation The new valuation of the token.
  function changeValuation(uint256 _tokenId, uint256 _valuation) external;
}

/*
notes:
when buying, you cannot put a lower valuation than the previous one.
when defunding, you cannot leave less than minimumFund.
*/
