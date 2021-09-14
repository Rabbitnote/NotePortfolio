import { Fragment, useState, useEffect } from 'react';
import Main from './mainPage/landingPage';
import Head from 'next/head';
export default function Home() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }

            window.addEventListener('resize', handleResize);

            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    const isMobile = windowSize.width < 768;
    return (
        <Fragment>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap" rel="stylesheet"/>
            </Head>
            {isMobile ? <Mobile></Mobile> : <Main></Main>}
        </Fragment>
    );
}
