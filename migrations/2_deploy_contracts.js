const ether = (n) => new web3.utils.BN(web3.utils.toBN(n, 'ether'));
const KToken = artifacts.require("KToken");
const KTokenCrowdsale = artifacts.require("KTokenCrowdsale");

module.exports = async function(deployer, network, accounts) { 
	const _name = "CSC4980 Token";
	const _symbol = "GSU";
	const _decimals = 16;

	await deployer.deploy(KToken, _name, _symbol, _decimals);
	const deployedToken = await KToken.deployed();

	const _rate = 850;
	const _wallet = accounts[0];
	const _cap = ether(350);
	deployer.deploy(KTokenCrowdsale, _rate, _wallet, _cap);

};
