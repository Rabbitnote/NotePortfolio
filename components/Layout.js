import { Fragment } from 'react';
import Nav from '../components/nav';
const Layout = props => {
    return (
        <Fragment>
            <Nav page={props.page}></Nav>
            <main>{props.children}</main>
        </Fragment>
    );
};
export default Layout;
