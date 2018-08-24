import React from "react";

import { Link } from "../routes";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <div className="logo">
                    <img src="" />
                </div>
                <div>
                    <Link  to="/">
                        <a className="menu_link isActive">Dashboard</a>
                    </Link>
                    <Link  to="/">
                        <a className="menu_link">Lock Funds</a>
                    </Link>
                    <Link to="/">
                        <a className="menu_link">Withdraw</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
