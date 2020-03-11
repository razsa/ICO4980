const BigNumber = web3.utils.BN;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

  const KToken = artifacts.require('KToken');
  const KTokenCrowdsale = artifacts.require('KTokenCrowdsale');

  contract('KTokenCrowdsale', function([_, wallet, investor1, investor2]) {
    beforeEach(async function () {
    	this.name = 'CSC4980 Token';
    	this.symbol = 'GSU';
    	this.decimals = 16;

    	this.token = await KToken.new(
    		this.name,
    		this.symbol,
    		this.decimals
    		);

    	this.rate = 850;
    	this.wallet = wallet;
    	this.cap = ether(350);

    	this.investorMinCap = ether(0.007);
    	this.investorHardCap = ether(50)

    	this.crowdsale = await KTokenCrowdsale.new(
    		this.rate,
    		this.wallet,
    		this.token.address,
    		this.cap
    		);
  	});

  contract('capped crowdsale', async function() {
  	it('has the correct hard cap', async function() {
  		const cap = await this.crowdsale.cap();
  		cap.should.be.bignumber.equal(this.cap);
  	});
  });

  contract('buyTokens()', function() {
  	contract('when the contribution is less than the minimum cap', function() {
  		it('rejects the transaction', async function() {
  			const value = this.investorMinCap - 1;
  			await this.crowdsale.buyTokens(investor2, {value, from: investor2 }).should.be.rejectedWith(EVMRevert);
  		});
  	});
  });

  });
