import React from "react";
import { Table, Button } from "semantic-ui-react";
import moment from "moment";

class WalletRow extends React.Component{

    render(){
        const { Row, Cell } = Table;
        const { amount, receiver, sender, unlockDate, lockDate } = this.props;

        const formatedLockDate = moment.unix(parseInt(lockDate)).format("MMMM Do YYYY");
        const formatedUnlockDate = moment.unix(parseInt(unlockDate)).endOf('day').fromNow();

        return (
            <Row>
                <Cell>{amount}</Cell>
                <Cell>{receiver.slice(0, 8)}...</Cell>
                <Cell>{sender.slice(0, 8)}...</Cell>
                <Cell>{formatedUnlockDate}</Cell>
                <Cell>{formatedLockDate}</Cell>
                <Cell>
                    <Button color="green">TopUp</Button>
                </Cell>
                <Cell>
                    <Button color="red">Withdraw</Button>
                </Cell>
            </Row>
        );
    };
};

export default WalletRow;