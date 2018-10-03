import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0x5b11Ef15033c88108B9DeE1130C4EA2B2015596A"
);

export default instance;