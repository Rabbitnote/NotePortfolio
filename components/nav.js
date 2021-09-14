import { Fragment } from 'react';
import Link from 'next/link';

const Nav = () => {
    const componentNav = [
        { label: 'Home', link: '/', page: 'home' },
        { label: 'About', link: '/about', page: 'about' },
        { label: 'Experiences', link: '/experiences', page: 'experiences' },
        { label: 'Contract', link: '/contract', page: 'contract' }
    ];
    return (
        <Fragment>
            <div>
                {componentNav.map(item => {
                    return (
                        <div key={item.label}>
                            <Link href={item.link}>{item.label}</Link>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};
export default Nav;
