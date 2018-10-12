import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0x623C62f419ebB0b11151B66cD4A242eacE801c06"
);

export default instance;