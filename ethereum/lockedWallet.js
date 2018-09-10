import web3 from "./web3";
import LockedWallet from "./build/LockedWallet.json";

export default (address)=>{
     const instance = new web3.eth.Contract(
        JSON.parse(LockedWallet.interface),
        address
    );

    return instance;
}

