pragma solidity ^0.5.11;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./KTokenCrowdsale.sol";

contract KToken is ERC20, ERC20Detailed {
    constructor(string memory _name, string memory _symbol, uint8 _decimals)
	ERC20Detailed(_name, _symbol, _decimals)
	public {
	}
}

