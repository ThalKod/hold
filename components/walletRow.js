import React from "react";
import { Table, Button } from "semantic-ui-react";
import moment from "moment";
import web3 from "../ethereum/web3";
import lockedWallet from "../ethereum/lockedWallet"

class WalletRow extends React.Component{

    onWithdrawButtonClick = async () =>{
        const walletInstance = lockedWallet(this.props.walletAddress);

        // Withdrawing from address to the receiver address
        try{
            await walletInstance.methods.widthdraw().call();
        }catch(err){
            console.log(err);
        }
        
    }

    render(){
        const { Row, Cell } = Table;
        const { amount, sender, unlockDate, lockDate } = this.props;

        // Format date to include in The table row...
        const formatedLockDate = moment.unix(parseInt(lockDate)).format("MMMM Do YYYY");
        const formatedUnlockDate = moment.unix(parseInt(unlockDate)).endOf('day').fromNow();

        // Unable to withdraw if unlock date haven't been passed yet 
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
                        amount > 0.00001 ? <Button onClick={this.onWithdrawButtonClick} disabled={!canWithdraw} color="red">Withdraw</Button> : "Empty !"
                    }
                </Cell>
            </Row>
        );
    };
};

export default WalletRow;