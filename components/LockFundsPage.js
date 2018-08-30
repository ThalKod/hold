import React from "react";
import moment from "moment";
import web3 from "../ethereum/web3";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import factoryWallet from "../ethereum/factoryWallet";


export default class LockFundsPage extends React.Component{

    state = {
        address: "",
        date: moment(),
        focused: false,
        amount: ""
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

    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.address || !this.state.amount){
            return console.log("provide address and amount");
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
                        <input 
                            type="text"
                            placeholder="Receiver Address..."
                            className="text-input"
                            autoFocus
                            value={this.state.address}
                            onChange={e =>this.setState({ address: e.target.value})}
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