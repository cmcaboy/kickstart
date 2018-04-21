const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {interface,bytecode} = require('./compile');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    "culture glance tray chicken awesome market ten chief drive lend marble first",
    'https://rinkeby.infura.io/r4hArekwqoBUtk2uNE6r'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account',accounts[0])

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface))
        // our contract doesnt require any arguments so we don't pass any
        // through to .deploy
        .deploy({data: compiledFactory.bytecode})
        .send({gas: '1000000',from: accounts[0]});

    console.log('address', result.options.address);
}
deploy();
