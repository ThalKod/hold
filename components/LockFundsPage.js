import React from "react";
import web3 from "../ethereum/web3";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";



export default class LockFundsPage extends React.Component{

    state = {
        address: "",
        date: null,
        focused: null
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

    render(){
        return(
            <div>
                <div className="page_header">
                    <div className="content-container">   
                        <h1 className="page-header__title">Lock Funds</h1>   
                    </div>
                </div>
                <div className="centered">
                    <form className="form" action="" onSubmit={this.onSubmit}>
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
                            placeholder="Amount"
                            className="text-input"
                        />
                        <SingleDatePicker
                            date={this.state.date}
                            onDateChange={this.onDateChange}
                            focused={this.state.focused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false }
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