import { Fragment } from 'react';
import Nav from '../components/nav';
import Styles from '../styles/layout.module.scss';
const Layout = props => {
    return (
        <Fragment>
            <Nav page={props.page}></Nav>
            <main className={Styles.layout}>{props.children}</main>
        </Fragment>
    );
};
export default Layout;
