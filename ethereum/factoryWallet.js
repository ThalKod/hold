import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0x863490b36Ecf2D398278f4eE76Cb840AAd635fE0"
);

export default instance;