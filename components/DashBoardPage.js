import React from "react";
import web3 from "../ethereum/web3";

import factoryWallet from "../ethereum/factoryWallet";
import lockedWallet from "../ethereum/lockedWallet";

class DashboardPage extends React.Component{

    state = {
        account: "",
        balance: 0,
        lockedFund: 0,
    };

    async componentDidMount(){
        const account = await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(account[0]);

        const walletsList =  await factoryWallet.methods.getWalletsByReceiver(account[0]).call();

        walletsList.forEach(async (wallet)=>{
            const walletInstance = lockedWallet(wallet);
            const info = await walletInstance.methods.getInfo().call();
            this.setState((state)=>{
                return {
                    lockedFund: state.lockedFund + parseFloat(web3.utils.fromWei(info[0].toString(), "ether"))
                };
            })
        });

        this.setState({ account, balance: web3.utils.fromWei(balance, "ether")});
    }

    render(){
        return (
            <div>
                <h1>Account : {this.state.account}</h1>
                <h1>balance : {this.state.balance}</h1>
                <h1>Locked Fund : {this.state.lockedFund}</h1>
            </div>  
        );
    }
}

export default DashboardPage;