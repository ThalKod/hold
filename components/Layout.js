import React from "react";
import Head from 'next/head';
import Menu from "./Menu";


export default (props)=>(
    <div>
        <Head>
            <link rel="stylesheet" href="/static/styles.css"  />
            <link rel="stylesheet" href="/static/_datepicker.css" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"/>
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