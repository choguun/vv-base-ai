// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IERC4626.sol";

contract ERC4626Vault is ERC20, IERC4626 {
    using SafeERC20 for IERC20;

    IERC20 private _asset;

    constructor(
        IERC20 asset
        ) ERC20("Stake Cube", "sCube")
    {
        _asset = asset;
    }

    function deposit(uint256 assets, address receiver) public override returns (uint256 shares) {
        uint256 totalAssets = totalAssets();
        uint256 totalShares = totalSupply();
        if (totalShares == 0) {
            shares = assets;
        } else {
            shares = (assets * totalShares) / totalAssets;
        }

        _asset.safeTransferFrom(msg.sender, address(this), assets);
        _mint(receiver, shares);

        return shares;
    }

    function withdraw(uint256 assets, address receiver, address owner) public override returns (uint256 shares) {
        uint256 totalAssets = totalAssets();
        uint256 totalShares = totalSupply();

        shares = (assets * totalShares) / totalAssets;

        if (msg.sender != owner) {
            uint256 currentAllowance = allowance(owner, msg.sender);
            require(currentAllowance >= shares, "ERC20: transfer amount exceeds allowance");
            _approve(owner, msg.sender, currentAllowance - shares);
        }

        _burn(owner, shares);
        _asset.safeTransfer(receiver, assets);

        return shares;
    }

    function totalAssets() public view override returns (uint256) {
        return _asset.balanceOf(address(this));
    }
}
