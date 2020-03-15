# Capped Crowdsale

# Installation
Navigate to the root root folder and type: ```npm install```

# Requirements
nodejs truffle openzeppelin

# Transactions
```
sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('2.5', 'ether')) , from : account1});

sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('15', 'ether')) , from : account1});

sale.buyTokens(account1, {value : new web3.utils.BN(web3.utils.toWei('15', 'ether')) , from : account1});// Doesnt Permit
```
