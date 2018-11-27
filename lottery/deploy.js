const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'habit annual awake other cruise antique service near weekend regret pottery shrimp',
  'https://rinkeby.infura.io/v3/518b7dff64f44082b0183c64f7e45b42'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ' + accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
                              .deploy({data: bytecode})
                              .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to ' + result.options.address);
};

deploy();
