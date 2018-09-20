import React from "react";
import Head from 'next/head';
import Menu from "./Menu";


export default (props)=>(
    <div>
        <Head>
            <link href="/static/styles.css" rel="stylesheet" />
            <link href="/static/_datepicker.css" rel="stylesheet" />
        </Head>
        
        <div>
            <div>
                <Menu />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </div>
);