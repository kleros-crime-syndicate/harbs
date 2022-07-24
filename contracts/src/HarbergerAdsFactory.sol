// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./HarbergerAdsFull.sol";

contract HarbergerAdsFactory {
    event CollectionCreated(
        HarbergerAdsFull _address,
        uint256 _totalSupply,
        uint256 _taxRate,
        uint256 _cooldownPeriod,
        IERC20 _currency,
        address _collector
    );

    function create(
        uint256 _totalSupply,
        uint256 _taxRate,
        uint256 _cooldownPeriod,
        IERC20 _currency,
        address _collector,
        string calldata _name,
        string calldata _symbol,
        string calldata _tokenURI
    ) public {
        HarbergerAdsFull harbergerAds = new HarbergerAdsFull(
            _taxRate,
            _cooldownPeriod,
            _currency,
            _collector,
            _name,
            _symbol
        );
        {
            emit CollectionCreated(harbergerAds, _totalSupply, _taxRate, _cooldownPeriod, _currency, _collector);
        }
        for (uint256 i = 0; i < _totalSupply; i++) {
            harbergerAds.safeMint(msg.sender, _tokenURI);
        }
    }
}
