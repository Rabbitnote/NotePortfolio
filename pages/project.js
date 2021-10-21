import { Fragment } from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/project.module.scss';
import Lottie from 'react-lottie';
import Link from 'next/link';
import animationData from '../public/Image/lottie/Testig-Tech-Colored.json';
import detailProject from '../components/detailProject';
const Project = () => {
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
            <Layout page='project'>
                <div className={Styles.container}>
                    <div className={Styles.container_header}>
                        <h1>My Project</h1>
                    </div>
                    <div className={Styles.container_mininav}>
                        <h2>ALL Project</h2>
                        <h2>Mobile Application</h2>
                        <h2>Web Application</h2>
                        <h2>Animation</h2>
                    </div>

                    <div className={Styles.project}>
                        {detailProject.map(item => {
                            const renderImg = () => {
                                if (item.name === 'Setthi') {
                                    return (
                                        <img
                                            src={item.img}
                                            className={
                                                Styles.project_card__mobile
                                            }
                                        ></img>
                                    );
                                }
                                return (
                                    <img
                                        src={item.img}
                                        className={Styles.project_card__web}
                                    ></img>
                                );
                            };
                            return (
                                <Link href={`/projects/${item.link}/`}>
                                    <div className={Styles.project_card}>
                                        {renderImg()}
                                        <div
                                            className={
                                                Styles.project_card__footer
                                            }
                                        >
                                            <div>
                                                <h1>{item.name}</h1>
                                                <h1>View More ></h1>
                                            </div>
                                        </div>
                                        <div className={Styles.project_tag}>
                                            {item.tag}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};
export default Project;
