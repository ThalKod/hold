import web3 from "./web3";
import FactoryWallet from "./build/FactoryWallet.json";

const instance = new web3.eth.Contract(
    JSON.parse(FactoryWallet.interface),
    "0x6adBD91D123548eA5f87823e46C9Ba53e7464e10"
);

export default instance;