// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Item} from "./Item.sol";

contract CraftSystem is Ownable {

    enum ItemType {
        PICKAXE,
        METAL_PICKAXE,
        GOLDEN_PICKAXE
    }

    struct Recipes {
        uint256[] inputs;
        uint256[] quantities;
        uint256 result;
    }

    struct Items {
        ItemType itemType;
    }

    mapping(uint256 => Recipes) public recipes;
    mapping(uint256 => Items) public items;

    uint256 public recipeCount = 0;
    uint256 public itemCount = 0;

    event CraftedItem(address sender, uint256 indexed itemId);

    address public world;
    address public item;

    constructor(address _initialOwner, address _world) Ownable(_initialOwner) {
        world = _world;
    }

    modifier onlyWorld() {
        require(_msgSender() == world, "Only world can call this function");
        _;
    }

    function setItem(address _item) public onlyOwner {
        item = _item;
    }

    function addReccipe(uint256[] memory inputs, uint256[] memory quantities, uint256 result) public onlyWorld {
        // Add the recipe inpits and result mapping via Item id
        recipes[recipeCount] = Recipes({inputs: inputs, quantities: quantities, result: result});
        recipeCount++;
    }

    function setRecipe(uint256 _recipeId, uint256[] memory inputs, uint256[] memory quantities, uint256 result) public onlyWorld {
        recipes[_recipeId] = Recipes({inputs: inputs, quantities: quantities, result: result});
    }

    function getRecipe(uint256 _recipeId) public view returns (Recipes memory) {
        return recipes[_recipeId];
    }

    function getAllRecipes() public view returns (Recipes[] memory) {
        Recipes[] memory allRecipes = new Recipes[](recipeCount);
        for (uint256 i = 0; i < recipeCount; i++) {
            allRecipes[i] = recipes[i];
        }
        return allRecipes;
    }

    function craftItem(uint256 _recipeId, address _to) public onlyWorld returns (bool, uint256) {
        Recipes memory recipe = getRecipe(_recipeId);
        for (uint256 i = 0; i < recipe.inputs.length; i++) {
            Item(item).burnbyCraftSystem(_to, recipe.inputs[i], recipe.quantities[i]);
        }
        Item(item).mintbyCraftSystem(_to, recipe.result, 1);
        emit CraftedItem(_to, recipe.result);
        return (true, recipe.result);
    }

    function addItems(uint256 _id, ItemType _itemType) public onlyWorld {
        items[_id] = Items({itemType: _itemType});
    }

    function getItem(uint256 _itemId) public view returns (Items memory) {
        return items[_itemId];
    }

    function getAllItems() public view returns (Items[] memory) {
        Items[] memory allItems = new Items[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            allItems[i] = items[i];
        }
        return allItems;
    }
}