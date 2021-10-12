import { Fragment } from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/about.module.scss';
import Footer from '../components/Footer';
const About = () => {
    return (
        <Fragment>
            <Layout page='about'>
                <div className={Styles.container}>
                    <div className={Styles.container_about}>
                        <div className={Styles.container_webLogo}>
                            <img
                                src='/Image/lottie/web-development.svg'
                                alt='Web-Develop Picture'
                            />
                        </div>
                        <div className={Styles.container_story}>
                            <h2 className={Styles.container_story__header}>
                                The story
                            </h2>
                            <p className={Styles.container_story__p}>
                                Hello, my name is Thanakorn Aungkunchuchod, or
                                can call me Note. <br />
                                I’m a student at KMUTT University.
                                <br />I love to decorate web and mobile
                                application to make the website <br />
                                more lively and more interactive to the user.
                                <br />I have experienced with tools such as CSS,
                                SCSS, ReactJS, and NextJS. <br />
                                In the future, I'm looking forward to being a
                                CSS developer and Front-End developer.
                            </p>
                        </div>
                    </div>

                    <h2 className={Styles.container_edu__header}>Education</h2>
                    <div className={Styles.container_edu__content}>
                        <div className={Styles.container_edu__card}>
                            <h3>
                                Kornpitacksuksa, the creative thinking School
                            </h3>
                            <h4>2010-2018</h4>
                            <h4>
                                Studying Science-Mathmematics Program
                                <br />
                                &#160;
                            </h4>
                            <h3 className={Styles.container_edu__card_gpax}>
                                Gpax : 3.02
                            </h3>
                        </div>
                        <div className={Styles.container_edu__card}>
                            <h3>
                                King Mongkut's University of Technology Thonburi
                            </h3>
                            <h4>2018 - Present</h4>
                            <h4>
                                Studying Bachelor's degree (3rd year) of
                                Computer Science, School of Information
                                Technology.
                            </h4>
                            <h3 className={Styles.container_edu__card_gpax}>
                                Gpax : 3.02
                            </h3>
                        </div>
                    </div>
                    <div className={Styles.container_tech}>
                        <h2>Tech & Skills</h2>
                    </div>
                    <div className={Styles.container_tech__gallery}>
                        <img src='/Image/Logo/Flutter.png' alt='Flutter Logo' />
                        <img src='/Image/Logo/CSS.png' alt='Css Logo' />
                        <img src='/Image/Logo/nodeJS.png' alt='NodeJS Logo' />
                        <img src='/Image/Logo/ReactJS.png' alt='React Logo' />
                        <img src='/Image/Logo/NextJs.png' alt='NextJS Logo' />
                        <img src='/Image/Logo/Scss.png' alt='Scss Logo' />
                    </div>
                    <div className={Styles.container_tech__subGallery}>
                        <img src='/Image/Logo/Java.png' alt='Java Logo' />
                        <img
                            src='/Image/Logo/JavaScript.png'
                            alt='Javascript Logo'
                        />
                    </div>
                    <div className={Styles.container_community}>
                        <div className={Styles.container_community__content}>
                            <img
                                src='/Image/Background/Tropical-night.svg'
                                alt='Background Picture'
                            />
                            <div className={Styles.container_community__text}>
                                <h2>Community</h2>
                                <h4>Google Developer Student Club in KMUTT</h4>
                                <h5>Public relations (PR) in 2021-Present</h5>
                                <div>
                                    <a href='https://www.facebook.com/gdsc.kmutt'>
                                        See in Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Footer></Footer>
            </Layout>
        </Fragment>
    );
};
export default About;
