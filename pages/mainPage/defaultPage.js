import { Fragment } from 'react';
import Layout from '../../components/Layout';
import style from '../../styles/Main.module.scss';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
const defaultPage = () => {
    return (
        <Fragment>
            <Layout page='home'>
                <div className={style.container}>
                    <img src='/image/profile.jpeg' className={style.pic} />
                    <div className={style.text}>
                        <p className={style.normal}>Welcome, My Name is</p>
                        <p className={style.name}>
                            "{' '}
                            <i className={style.nameColor}>
                                Thanakorn Aungkunchuchod
                            </i>{' '}
                            "
                        </p>
                        <div className={style.textContainer}>
                        <div className={style.small}>
                            <p>
                                You can call me "NOTE". This online Website do
                                it for my portfolio
                            </p>
                            <p>I'm loved to do the CSS Animation</p>
                            <p>And Frontend Developer</p>
                        </div>
                    </div>
                </div>
                <Button></Button>
                </div>
             <Footer></Footer>
            </Layout>
        </Fragment>
    );
};
export default defaultPage;
