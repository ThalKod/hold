import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0xF37C42eb008966c4ECfb1ceCd4dA80aa17e75301"
);

export default instance;