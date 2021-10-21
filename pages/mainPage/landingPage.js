import { Fragment } from 'react';
import Link from 'next/link';
import '../../components/nav';
import Styles from '../../styles/landingPage.module.scss';
import Layout from '../../components/Layout';
import Lottie from 'react-lottie';
import animationData from '../../public/Image/lottie/Blogging.json';
const LandingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Fragment>
            <Layout page='home'>
                <div className={Styles.container}>
                    <div className={Styles.container_content}>
                        <div className={Styles.container_content_img}>
                            <Lottie options={defaultOptions} />
                        </div>
                        <div className={Styles.container_content_column}>
                            <div className={Styles.container_content_mainHead}>
                                <h1 className={Styles.container_content_header}>
                                    NOTE
                                </h1>
                                <span className={Styles.container_content_text}>
                                    Front-End
                                    <br />
                                    Developer
                                </span>
                            </div>
                            <h1 className={Styles.container_content_name}>
                                Thanakorn Aungkunchuchod
                            </h1>

                            <Link href='about'>
                                <a className={Styles.container_content_btn}>
                                    About Me <i>&#8594;</i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};
export default LandingPage;
