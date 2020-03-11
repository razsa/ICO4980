const BigNumber = web3.utils.BN;

const KToken = artifacts.require('KToken');
const chai = require('chai');
const BN = require('bn.js');
chai.use(require('chai-as-promised'))
chai.use(require('chai-bn')(BN))
.should();

contract('KToken', accounts => {
	const _name = 'CSC4980 Token';
	const _symbol = 'GSU';
	const _decimals = 16;

	beforeEach(async function () {
		this.token = await KToken.new(_name, _symbol, _decimals);
	});

	contract('token attributes', function() {
		it('has the correct name,', async function() {
			const name =  await this.token.name();
			name.should.equal(_name);
		});

		it('has the correct symbol', async function() {
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);
		});

		it('has the correct decimals', async function() {
			const decimals = await this.token.decimals();
			decimals.should.be.bignumber.equal(_decimals);
		});
	});
});