import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Styles from '../styles/nav.module.scss';
import useGAEventsTracker from './useGAEventsTracker';

const Nav = ({ page }) => {
    const GAEventsTracker = useGAEventsTracker("Click Nav");
    const componentNav = [
        { label: 'Home', link: '/', page: 'home' },
        { label: 'About', link: '/about', page: 'about' },
        { label: 'Project', link: '/project', page: 'project' },
        { label: 'Contact', link: '/contact', page: 'contact' }
    ];
    return (
        <Fragment>
            <div className={Styles.nav}>
                <div className={Styles.nav_logo}>LOGO</div>
                <div className={Styles.nav_page}>
                    {componentNav.map(item => {
                        return (
                            <Link href={item.link}>
                                <div
                                    onClick={(e)=>GAEventsTracker(item.label)}
                                    key={item.label}
                                    className={`${
                                        item.page === page
                                            ? `${Styles.active}`
                                            : ''
                                    }`}
                                >
                                    {item.label}
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className={Styles.nav_linked}>
                    <a href="https://www.facebook.com/profile.php?id=100002918588450">
                    <img src='/Image/Facebook.svg' alt='FacebookImage' />
                    </a>
                    <a href="https://www.linkedin.com/in/thanakorn-aungkunchuchod-8777631b9/">
                    <img src='/Image/LinkedIN.svg' alt='LinkedIn' />
                    </a>
                    <a href="https://github.com/Rabbitnote">
                    <img src='/Image/Github.svg' alt='GithubImage' />
                    </a>
                </div>
            </div>
        </Fragment>
    );
};
export default Nav;
