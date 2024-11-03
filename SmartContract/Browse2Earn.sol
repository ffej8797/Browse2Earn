// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract B2Etest is ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("B2Etest", "BET")
        Ownable(initialOwner)
        ERC20Permit("B2Etest")
    {}

    mapping (address => uint256) public UserLiveTime;  // second
    mapping (address => uint256) public UserRewards;

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    /* Write Function */
    function init() public {
        UserRewards[msg.sender] = 0;
    }

    function startRecord(address user) public {
        UserLiveTime[user] = block.timestamp;
    }

    function endRecord(address user) public {
        UserRewards[user] = UserRewards[user] + (block.timestamp - UserLiveTime[user]);
    }

    function claimReward() public {
        _mint(msg.sender, UserRewards[msg.sender]);
        UserRewards[msg.sender] = 0;
    }

    /* Read Function */
    function getReward() public view returns (uint256) {
        return UserRewards[msg.sender];
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, value);
    }
}
