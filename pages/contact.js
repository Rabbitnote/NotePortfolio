import { Fragment } from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/contract.module.scss';
const Contract = () => {
    return (
        <Fragment>
            <Layout page='contact'>
                <div className={Styles.container}>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=100002918588450'>
                            <img src='/Image/contract/Facebook.svg' alt='' />
                        </a>
                        <a href='https://www.linkedin.com/in/thanakorn-aungkunchuchod-8777631b9/'>
                            <img src='/Image/contract/LinkedIn.svg' alt='' />
                        </a>
                        <a href='https://github.com/Rabbitnote'>
                            <img src='/Image/contract/Github.svg' alt='' />
                        </a>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};
export default Contract;
