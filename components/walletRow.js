import React from "react";
import { Table } from "semantic-ui-react";

class WalletRow extends React.Component{

    render(){
        const { Row, Cell } = Table;
        const { amount } = this.props;

        return (
            <Row>
                <Cell>{amount}</Cell>
            </Row>
        );
    };
};

export default WalletRow;