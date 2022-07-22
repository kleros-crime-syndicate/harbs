import "@openzeppelin/contracts/ERC721/IERC721.sol";

interface IHarberger is IERC721 {
  function buy(uint256 _tokenId, uint256 _offer, uint256 _valuation) external;
  
  function collect(uint256 _tokenId) external;
  
  function revoke(uint256 _tokenId) external;
  
  function changeValuation(uint256 _tokenId, uint256 _valuation) external;
}