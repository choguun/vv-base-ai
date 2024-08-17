// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC4626} from "@openzeppelin/contracts/interfaces/IERC4626.sol";
import {Token} from "./Token.sol";

contract Banking {
    address public constant FRAX = 0xFc00000000000000000000000000000000000001;
    address public constant sFRAX = 0xfc00000000000000000000000000000000000008;
    address public constant sFRAXVault = 0xBFc4D34Db83553725eC6c768da71D2D9c1456B55;

    function _depositFraxVault(uint256 _amount, address _reciever) internal returns (bool, uint256) {
        uint256 share = IERC4626(sFRAXVault).deposit(_amount, _reciever);

        if(share > 0)
            return (true, share);
        else
            return (false, 0);
    }

    function _redeemFraxVault(uint256 _amount, address _reciever) public returns (bool, uint256) {
        uint256 share = IERC4626(sFRAXVault).redeem(_amount, _reciever, _reciever);

        if(share > 0)
            return (true, share);
        else
            return (false, 0);
    }
    // TODO: integrate with sFRAX Vault call deposit FRAX token to recieve sFRAX token
    // TODO: sFRAX token will store in World contract and Banking contract will mapping address and FRAX deposit amount
    // TODO: when players withdraw their deposit get will get principal back with yield after fees 10% and CUBE token bonus(+10% APY)
}