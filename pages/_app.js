import '../styles/global.scss';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
mixpanel.init('a663fa38f8d6fedeb15eaeec6cd540b0');
const tokenGA = "UA-191131524-2";
// ReactGA.initialize(tokenGA)
function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence>
            {' '}
            <Component {...pageProps} />
        </AnimatePresence>
    );
}

export default MyApp;
