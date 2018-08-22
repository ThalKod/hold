import React from "react";
import Head from 'next/head'

import DashboardPage from "../components/DashBoardPage";

export default ()=>(
    <div>
        <Head>
            <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <DashboardPage />
    </div>
);

