import React from "react";
import { Table, Button } from "semantic-ui-react";

class WalletRow extends React.Component{

    render(){
        const { Row, Cell } = Table;
        const { amount, receiver, sender, unlockDate, lockDate } = this.props;
        console.log(unlockDate);

        return (
            <Row>
                <Cell>{amount}</Cell>
                <Cell>{receiver.slice(0, 8)}...</Cell>
                <Cell>{sender.slice(0, 8)}...</Cell>
                <Cell>{unlockDate}</Cell>
                <Cell>{lockDate}</Cell>
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