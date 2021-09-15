import { Fragment } from 'react';
import Link from 'next/link';
import '../../components/nav';
import Styles from '../../styles/landingPage.module.scss';

const LandingPage = () => {
    return (
        <Fragment>
            <div className={Styles.container}>
                <div className={Styles.container_nav}>
                    <div className={Styles.container_nav__red}></div>
                    <div className={Styles.container_nav__orange}></div>
                    <div className={Styles.container_nav__green}></div>
                </div>
                <div className={Styles.container_content}>
                    <img
                        src='/image/profile.jpg'
                        className={Styles.container_content_img}
                    ></img>
                    <div className={Styles.container_content_column}>
                        <div className={Styles.container_content_mainHead}>
                            <h1 className={Styles.container_content_header}>
                                NOTE
                            </h1>{' '}
                            <span className={Styles.container_content_text}>
                                Hi, This is my portfolio. <br /> Loved to{' '}
                                <span
                                    className={
                                        Styles.container_content_text_dec1
                                    }
                                >
                                    Front-End{' '}
                                </span>
                                ,
                                <span
                                    className={
                                        Styles.container_content_text_dec2
                                    }
                                >
                                    {' '}
                                    Mobile Dev
                                </span>
                                <br />
                                not{' '}
                                <span
                                    className={
                                        Styles.container_content_text_dec3
                                    }
                                >
                                    Backend !!!
                                </span>
                            </span>
                        </div>
                        <h1 className={Styles.container_content_name}>
                            Thanakorn Aungkunchuchod
                        </h1>

                        <Link href='about'>
                            <a className={Styles.container_content_btn}>
                                About <i>&#8594;</i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default LandingPage;
