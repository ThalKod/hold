import React from "react";
import { Table, Button } from "semantic-ui-react";
import moment from "moment";
import web3 from "../ethereum/web3";
import lockedWallet from "../ethereum/lockedWallet";

class WalletRow extends React.Component{

    onWithdrawButtonClick = () =>{

    }

    render(){
        const { Row, Cell } = Table;
        const { amount, receiver, sender, unlockDate, lockDate } = this.props;

        const formatedLockDate = moment.unix(parseInt(lockDate)).format("MMMM Do YYYY");
        const formatedUnlockDate = moment.unix(parseInt(unlockDate)).endOf('day').fromNow();

        const canWithdraw = Math.round(Date.now() / 1000) >= parseInt(unlockDate);

        return (
            <Row>
                <Cell>{amount}</Cell>
                <Cell>Me</Cell>
                <Cell>{sender.slice(0, 8)}...</Cell>
                <Cell>{formatedLockDate}</Cell>
                <Cell>{formatedUnlockDate}</Cell>
                <Cell>
                    <Button color="green">TopUp</Button>
                </Cell>
                <Cell>
                    {
                        amount > 0 ? <Button onClick={this.onWithdrawButtonClick} disabled={!canWithdraw} color="red">Withdraw</Button> : "Empty !"
                    }
                </Cell>
            </Row>
        );
    };
};

export default WalletRow;