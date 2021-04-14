import { Fragment } from 'react';
import Head from 'next/head';
const Header = () => {
    return (
        <Fragment>
            <Head>
                <title>Thanakorn</title>
                <link rel='icon' href='/image/rabbit.png' />
                <meta name='title' content='Portfolio'></meta>
                <meta
                    name='description'
                    content='Portfolio of Thanakorn'
                ></meta>
            </Head>
        </Fragment>
    );
};

export default Header;
