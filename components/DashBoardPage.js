import React from "react";

import Menu from "./Menu";

class DashboardPage extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <h1>Dashboard Page</h1>
            </div>  
        );
    }
}

export default DashboardPage;