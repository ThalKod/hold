import React from "react";
import Head from 'next/head';
import Menu from "./Menu";


export default (props)=>(
    <div>
        <Head>
            <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        
        <Menu />
        {props.children}
    </div>
);