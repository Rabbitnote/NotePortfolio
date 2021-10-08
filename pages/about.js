import { Fragment } from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/about.module.scss';
const About = () => {
    return (
        <Fragment>
            <Layout page='about'>
                <div className={Styles.container}>
                    <div className={Styles.container_about}>
                        <div className={Styles.container_webLogo}>
                            <img
                                width='650px'
                                height='25%'
                                src='../Image/lottie/web-development.png'
                                alt='Web-Develop Picture'
                            />
                        </div>
                        <div className={Styles.container_story}>
                            <h2 className={Styles.container_story__header}>
                                The story
                            </h2>
                            <p className={Styles.container_story__p}>
                                Hello, my name is Thanakorn Aungkunchuchod, or
                                can call me Note. <br/>I’m a student at KMUTT
                                University.
                                <br />I love to decorate web and mobile
                                application to makes the website <br/>more lively and
                                more interactive to the user.
                                <br />I have experience with tools such as CSS,
                                SCSS, ReactJS, and NextJS, In the future, I'm
                                looking forward to being a CSS developer and
                                Front-End developer.
                            </p>
                        </div>
                    </div>
                    <h2 className={Styles.container_edu}>Education</h2>
                </div>
            </Layout>
        </Fragment>
    );
};
export default About;
