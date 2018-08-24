import Web3 from "web3";
import  temp from "../temp";

let web3;

if(typeof window !== "undefined" && typeof window.web3 !== "undefined"){
    // ..using the Metamask provider
    web3 = new Web3(window.web3.currentProvider);
}else{
    const provider = new Web3.providers.HttpProvider(`https://kovan.infura.io/${temp.INFURA_API}`);

    web3 = new Web3(provider);
}

export default web3;