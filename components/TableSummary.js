import React from "react";
import web3 from "../ethereum/web3";

import { Table } from "semantic-ui-react";
import WalletRow from "./WalletRow";


export default class TableSummary extends React.Component {

    renderRow = ()=>{
        
        return this.props.wallets.map((wallet, index)=>{
            return <WalletRow 
                        key={index} 
                        amount={web3.utils.fromWei(wallet[0], "ether")} 
                        receiver={wallet[2]}
                        sender={wallet[1]}
                        unlockDate={wallet[3]}
                        lockDate={wallet[4]}
                    />
        })
    }

    render(){

        const { Row, Header, HeaderCell, Body} = Table;

        return (
            <div>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>Amount(ETH)</HeaderCell>
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
