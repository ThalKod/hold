import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0xfB05fa943C5592c416620a40088b9d9dAcFE19D2"
);

export default instance;