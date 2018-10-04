import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0xD4F878d3f86965C7d7aB82108ef69ad689D15f7F"
);

export default instance;