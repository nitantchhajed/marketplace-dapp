// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QueppelinCoin is ERC20, Ownable {
    constructor() ERC20("Queppelin Coin", "QC") {}

    function mint(uint256 amount) public payable {
        require(msg.value == amount * 0.0001 ether, "invalid amount of ether");
        _mint(msg.sender, amount);
    }
    receive() external payable{}
    fallback() external payable{}
}
