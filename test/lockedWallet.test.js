// TODO: Complete test case...
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const compiledLockedWalet = require("../ethereum/build/lockedWallet.json");

let accounts;
let lockedWallet;
let date = Date.now() + 200;

beforeEach(async ()=>{
    
    accounts = await web3.eth.getAccounts();

    lockedWallet = await new web3.eth.Contract(JSON.parse(compiledLockedWalet.interface))
        .deploy({data: "0x" + compiledLockedWalet.bytecode, arguments: [accounts[0], date ] })
        .send({from: accounts[0], gas: "1000000" });

});

describe("LockedWallet", ()=>{
    test("should deploys a lockedWallet contract", ()=>{
        expect(lockedWallet.options.address).toBeTruthy();
    });
});