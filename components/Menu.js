import React from "react";

import Link  from "./ActiveLink";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <div className="logo">
                    <img src="" />
                </div>
                <div>
                    <Link activeClassName="isActive"  href="/">
                        <a className="menu_link">Dashboard</a>
                    </Link>
                    <Link activeClassName="isActive" href="/lock">
                        <a className="menu_link">Lock Funds</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
