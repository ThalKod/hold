import React from "react";
import web3 from "../ethereum/web3";

import { Table } from "semantic-ui-react";
import lockedWallet from "../ethereum/lockedWallet";
import WalletRow from "./WalletRow";


export default class TableSummary extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        walletDetails: this.props.wallets
    }

    componentDidMount = ()=>{
        
        // this.props.walletsList.forEach(async (wallet)=>{
        //     const walletInstance = lockedWallet(wallet);
        //     const info = await walletInstance.methods.getInfo().call();
        //     console.log(info);
        // });
        // const walletInstance = lockedWallet(wallet);
        // const info = await walletInstance.methods.getInfo().call();

    }

    renderRow = ()=>{
        
        return this.props.wallets.map((wallet, index)=>{
            return <WalletRow 
                        key={index} 
                        amount={web3.utils.fromWei(wallet[0], "ether")} 
                    />
        })
    }

    render(){

        const { Row, Header, HeaderCell, Body, Cell } = Table;

        return (
            <div>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Receiver</HeaderCell>
                            <HeaderCell>Creator</HeaderCell>
                            <HeaderCell>Unlock Date</HeaderCell>
                            <HeaderCell>Lock Date</HeaderCell>
                            <HeaderCell>Top Up</HeaderCell>
                            <HeaderCell>Withdraw</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table> 
            </div>           
        );
    };
}
