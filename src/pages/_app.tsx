import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from 'style/GlobalStyle';
import FontStyles from 'style/font';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Clone AfreecaTV</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
            {/* <FontStyles /> */}
        </>
    );
}

export default MyApp;
