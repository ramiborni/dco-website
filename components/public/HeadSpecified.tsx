import Head from "next/head";
import React from "react";

const HeadSpecified = ({title} : {
    title: string
}) => {
    return (
        <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <title>{
                title === '' ? 'Digimon Crisis Online' : title + ' - Digimon Crisis Online'
            }</title>

        </Head>
    );
}

export default HeadSpecified;
