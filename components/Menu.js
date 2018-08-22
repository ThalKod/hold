import React from "react";

import { Link } from "../routes";

class Menu extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src="" />
                </div>
                <div>
                    <Link to="/">
                        <a>Dashboard</a>
                    </Link>
                    <Link to="/">
                        <a>Lock Funds</a>
                    </Link>
                    <Link to="/">
                        <a>Withdraw</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
