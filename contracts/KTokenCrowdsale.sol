pragma solidity ^0.5.11;

import "@openzeppelin/contracts/crowdsale/validation/CappedCrowdsale.sol";

contract KTokenCrowdsale is CappedCrowdsale {
	uint256 public investorMinCap = 7000000000000000000;
	uint256 public investorMaxCap = 350000000000000000000;
	mapping(address => uint256) public contributions;

	constructor(
		uint256 _rate,
		address payable _wallet,
		IERC20 _token,
		uint256 _cap
	)
	//Crowdsale(_rate, _wallet, _token)
	CappedCrowdsale(_cap) public {}

function _preValidatePurchase(
	address _beneficiary,
	uint256 _weiAmount
	)
	internal view
	{
		super._preValidatePurchase(_beneficiary, _weiAmount);
	uint256 _existingContribution = contributions[_beneficiary];
	uint256 _newContribution = _existingContribution.add(_weiAmount);
	require(_existingContribution == 0);
	require(_newContribution >= investorMinCap && _newContribution <= investorMaxCap);
	//contributions[_beneficiary] = _newContribution;
}

function getTokensLeft()
	public view returns (uint) {
		return address(this).balance;
	}

}
