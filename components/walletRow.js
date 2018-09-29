import React from "react";
import { Table, Button } from "semantic-ui-react";
import moment from "moment";

class WalletRow extends React.Component{


    render(){
        const { Row, Cell } = Table;
        const { amount, receiver, sender, unlockDate, lockDate } = this.props;

        const formatedLockDate = moment.unix(parseInt(lockDate)).format("MMMM Do YYYY");
        const formatedUnlockDate = moment.unix(parseInt(unlockDate)).endOf('day').fromNow();

        const canWithdraw = Math.round(Date.now() / 1000) >= parseInt(unlockDate);


        return (
            <Row>
                <Cell>{amount}</Cell>
                <Cell>{receiver.slice(0, 8)}...</Cell>
                <Cell>{sender.slice(0, 8)}...</Cell>
                <Cell>{formatedLockDate}</Cell>
                <Cell>{formatedUnlockDate}</Cell>
                <Cell>
                    <Button color="green">TopUp</Button>
                </Cell>
                <Cell>
                    <Button disabled={!canWithdraw} color="red">Withdraw</Button>
                </Cell>
            </Row>
        );
    };
};

export default WalletRow;