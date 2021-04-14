import { Fragment } from 'react';
import Link from 'next/link';
import style from '../styles/Nav.module.scss';

const Nav = () => {
    const componentNav = [
        { label: 'Home', link: '/', page: 'home' },
        { label: 'About', link: '/about', page: 'about' },
        { label: 'Experiences', link: '/experiences', page: 'experiences' },
        { label: 'Contract', link: '/contract', page: 'contract' }
    ];
    return (
        <Fragment>
            <div className={style.container}>
                {componentNav.map(item => {
                    return (
                        <div className={style.nav} key={item.label}>
                            <Link href={item.link}>{item.label}</Link>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};
export default Nav;
