import { Fragment } from 'react';
import Link from 'next/link';
import Styles from '../styles/nav.module.scss';

const Nav = () => {
    const componentNav = [
        { label: 'Home', link: '/', page: 'home' },
        { label: 'About', link: '/about', page: 'about' },
        { label: 'Experiences', link: '/experiences', page: 'experiences' },
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
                                <div key={item.label}>{item.label}</div>
                            </Link>
                        );
                    })}
                </div>
                <div className={Styles.nav_linked}>
                    <img src='/Image/Facebook.svg' alt='FacebookImage' />
                    <img src='/Image/LinkedIN.svg' alt='LinkedIn' />
                    <img src='/Image/Github.svg' alt='GithubImage' />
                </div>
            </div>
        </Fragment>
    );
};
export default Nav;
