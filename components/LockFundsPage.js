import React from "react";
import web3 from "../ethereum/web3";
import 'react-dates/initialize';



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

    render(){
        return(
            <div>
                <div className="page_header">
                    <div className="content-container">   
                        <h1 className="page-header__title">Lock Funds</h1>   
                    </div>
                </div>
            </div>
        )
    }
};