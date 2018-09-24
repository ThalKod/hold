import React from "react";
import { Table } from "semantic-ui-react";

export default class TableSummary extends React.Component {
    render(){
        const { Row, Header, HeaderCell, Body } = Table;

        return (
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>Unlock Date</HeaderCell>
                        <HeaderCell>Receiver</HeaderCell>
                        <HeaderCell>Sender</HeaderCell>
                        <HeaderCell>Top Up</HeaderCell>
                        <HeaderCell>Withdraw</HeaderCell>
                    </Row>
                </Header>
                <Body>
                </Body>
            </Table>            
        );
    };
}