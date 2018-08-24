import React from "react";
import web3 from "../ethereum/web3";

import factoryWallet from "../ethereum/factoryWallet";

class DashboardPage extends React.Component{

    state = {
        account: "",
        balance: 0,
        lockedFund: 0,
    };

    async componentDidMount(){
        const account = await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(account[0]);

        const wallets =  await factoryWallet.methods.getWallets().call();


        this.setState({ account, balance: web3.utils.fromWei(balance, "ether")});
    }

    render(){
        return (
            <div>
                <h1>Account : {this.state.account}</h1>
                <h1>balance : {this.state.balance}</h1>
            </div>  
        );
    }
}

export default DashboardPage;