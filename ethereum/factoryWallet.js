import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0x3a166250a1c7d7Ef1532CFf0eb256E9e9Ee84e66"
);

export default instance;