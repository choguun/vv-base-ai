// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Profile} from "./Profile.sol";

contract Token is ERC20, Ownable {
    address public profile;
    address public world;

    constructor(address _initialOwner, address _world, address _profile) ERC20("CUBE Token", "CUBE") Ownable(_initialOwner) {
        profile = _profile;
        world = _world;
    }

    modifier onlyUser() {
        require(Profile(profile).balanceOf(_msgSender()) > 0, "Only user can call this function");
        _;
    }

    modifier onlyWorld() {
        require(_msgSender() == world, "Only world can call this function");
        _;
    }

    function setWorld(address _world) public onlyOwner {
        world = _world;
    }

    function mint(address to, uint256 _amount) public onlyWorld {
        _mint(to, _amount);
    }

    function burn(address from, uint256 _amount) public onlyWorld {
        _burn(from, _amount);
    }
}