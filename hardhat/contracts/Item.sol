// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Item is ERC1155, Ownable {
    uint256 public constant PICKAXE = 0;
    uint256 public constant METAL_PICKAXE = 1;
    uint256 public constant GOLDEN_PICKAXE = 2;

    address public world;
    address public craft;

    constructor(address _initialOwner, address _world, address _craft, string memory _itemURI) 
    ERC1155(_itemURI)
    Ownable(_initialOwner)
    {
        world = _world;
        craft = _craft;
    }

    modifier onlyWorld() {
        require(_msgSender() == world, "Only world can call this function");
        _;
    }

    modifier onlyCraft() {
        require(_msgSender() == craft, "Only craft can call this function");
        _;
    }

    function mint(address _to, uint256 _id, uint256 _amount) public onlyWorld {
        _mint(_to, _id, _amount, "");
    }

    function burn(address _to, uint256 _id, uint256 _amount) public onlyWorld {
        _burn(_to, _id, _amount);
    }

    function mintbyCraftSystem(address _to, uint256 _id, uint256 _amount) public onlyCraft {
        _mint(_to, _id, _amount, "");
    }

    function burnbyCraftSystem(address _to, uint256 _id, uint256 _amount) public onlyCraft {
        _burn(_to, _id, _amount);
    }
}
