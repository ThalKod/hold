import React from "react";
import web3 from "../ethereum/web3";

import factoryWallet from "../ethereum/factoryWallet";
import lockedWallet from "../ethereum/lockedWallet";
import TableSummary from "./TableSummary";

class DashboardPage extends React.Component{

    state = {
        account: "",
        balance: 0,
        lockedFund: 0,
        selectValue: "",
        walletDetails: []
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
                    lockedFund: state.lockedFund + parseFloat(web3.utils.fromWei(info[0].toString(), "ether")),
                    walletDetails: state.walletDetails.concat([info])
                };
            })
        });

        
        this.setState({account, selectValue: account[0], balance: web3.utils.fromWei(balance, "ether") });
    }

    render(){  
        
        return (
            <div>
                <div className="page_header">
                    <div className="content-container">   
                        <h1 className="page-header__title">Dashboard</h1>   
                    </div>
                </div>

                <div className="dashContainer">
                    <input 
                        type="text"
                        placeholder="Your address..."
                        className="text-input large"
                        value={this.state.account}
                    />

                    <div className="inline">
                        <div>
                            <div className="boxes white-bg padding15">
                                <div className="center nodeco">
                                    <h3>Address Balance</h3>
                                    <h2>{this.state.balance} ETH</h2>
                                </div>
                            </div>
                            <div className="boxes white-bg padding15">
                                <div className="center nodeco">
                                    <h3>Locked Fund</h3>
                                    <h2>{this.state.lockedFund} ETH</h2>
                                </div>
                            </div>
                        </div>

                        <TableSummary wallets={this.state.walletDetails} className="table" />
                    </div>
                </div>
            </div>  
        );
    }
}

export default DashboardPage;