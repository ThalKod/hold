const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");

// if already built, remove
fs.removeSync(buildPath);

const lockedWalletPath = path.resolve(__dirname, "contracts", "lockedWallet.sol" );
const source = fs.readFileSync(lockedWalletPath, "utf8");


const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

// let's create a build file for each contract
for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"), 
        output[contract]
    );
}