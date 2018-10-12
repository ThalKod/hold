const temp = require("../temp");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactoryWallet = require("../ethereum/build/FactoryWallet.json");

const provider = new HDWalletProvider(temp.MNEMONIC, `https://kovan.infura.io/${temp.INFURA_API}`); 
const web3 = new Web3(provider);

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    console.log("Attempting to deploy from Account " + accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactoryWallet.interface))
        .deploy({data: "0x" + compiledFactoryWallet.bytecode})
        .send({gas: "1000000", from: accounts[0]});

        console.log("Contract deployed to ", result.options.address);
};
deploy();

// 0x623C62f419ebB0b11151B66cD4A242eacE801c06