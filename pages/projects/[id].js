import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/nav';
import Link from 'next/link';
import Styles from '../../styles/id.module.scss';
import detailProject from '../../components/detailProject';
const Project = () => {
    const router = useRouter();
    const data = router.query;
    return (
        <Fragment>
            <Nav page='project'></Nav>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <Link href='/project'>
                        <a className={Styles.content__back}>{'<'} Back</a>
                    </Link>
                    {detailProject.map(item => {
                        if (item.link === data.id) {
                            const renderLink = () => {
                                if (item.linkweb != '') {
                                    return (
                                        <Fragment>
                                            Link:
                                            <a href={item.linkweb}>
                                                {item.linkweb}
                                            </a>
                                            <br />
                                        </Fragment>
                                    );
                                }
                            };
                            const renderLogo = () => {
                                if (item.name === 'Setthi') {
                                    return (
                                        <div className={Styles.content__img}>
                                            <div className={Styles.content__img_mobile}>
                                                <img
                                                    src={item.logo}
                                                    alt='Logo'
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div className={Styles.content__img}>
                                        <div
                                            className={Styles.content__img_web}
                                        >
                                            <img src={item.logo} alt='Logo' />
                                        </div>
                                    </div>
                                );
                            };
                            return (
                                <Fragment>
                                    <div className={Styles.content_layout}>
                                        {renderLogo()}
                                        <div className={Styles.content__detail}>
                                            <h1>{item.name}</h1>
                                            <h3>{item.desc}</h3>
                                            <div>
                                                {renderLink()}
                                                Github:
                                                <a href={item.github}>
                                                    {item.github}
                                                </a>
                                            </div>
                                            <h2>Technology Stack</h2>
                                            {item.tech.map(techs => {
                                                return <div> - {techs}</div>;
                                            })}
                                        </div>
                                    </div>
                                    <h2 className={Styles.content__gallery}>
                                        Gallery
                                    </h2>
                                    <div
                                        className={
                                            Styles.content__layoutgallery
                                        }
                                    >
                                        {item.gallery.map(pic => {
                                            if (
                                                item.tag ===
                                                'Mobile Application'
                                            ) {
                                                return (
                                                    <img
                                                        src={pic}
                                                        alt={pic}
                                                        className={
                                                            Styles.content__layoutgallery_mobile
                                                        }
                                                    />
                                                );
                                            }
                                            return (
                                                <img
                                                    src={pic}
                                                    alt={pic}
                                                    className={
                                                        Styles.content__layoutgallery_web
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </Fragment>
                            );
                        }
                    })}
                </div>
            </div>
        </Fragment>
    );
};
export default Project;
