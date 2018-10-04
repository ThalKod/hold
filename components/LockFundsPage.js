import React from "react";
import moment from "moment";
import web3 from "../ethereum/web3";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import factoryWallet from "../ethereum/factoryWallet";
import { Router } from "../routes";


export default class LockFundsPage extends React.Component{

    state = {
        address: "",
        sendTo: "",
        date: moment().add("1", "days"),
        focused: false,
        amount: "",
        error: "",
    }

    async componentDidMount(){
        const address = await web3.eth.getAccounts();

        this.setState({ address: address[0]});
    }

    onFocusChange = ({ focused })=>{
        this.setState(()=>({ focused}));
    };

    onDateChange = (date)=>{
        if(date){
            this.setState(()=>({ date }));
        }
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,8})?$/)){
            this.setState(()=>({ amount }));
        }
    }

    onSubmit = async (e)=>{
        e.preventDefault();

        if(!this.state.address){
            this.setState({ error: "You must provide an address" })
            return console.log("provide address and amount");
        }else if(!this.state.amount){
            this.setState({ error: "You must provide an amount" })
        }else{
            this.setState({ error: ""});
        }

        try{
            // Creating a locked Wallet
            await factoryWallet.methods.createWallet(this.state.sendTo, this.state.date.unix()).send({
                from: this.state.address,
                value: web3.utils.toWei(this.state.amount, "ether")
            });
            Router.push("/");
        }catch(error){
            this.setState({ error: error.message });
        }   
        
    }

    render(){
        return(
            <div>
                <div className="page_header">
                    <div className="content-container">   
                        <h1 className="page-header__title">Lock Funds</h1>   
                    </div>
                </div>
                <div className="centered">
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <input 
                            type="text"
                            placeholder="Receiver Address..."
                            className="text-input"
                            autoFocus
                            value={this.state.sendTo}
                            onChange={e =>this.setState({ sendTo: e.target.value})}
                        />
                        <input 
                            type="text"
                            placeholder="Amount(ETH)"
                            className="text-input"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                        <SingleDatePicker
                            date={this.state.date}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={date => date + 1 < moment()}
                            placeholder="Unlock Time"
                        />
                        <div>
                            <button className="button">Lock Funds</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};