import { Fragment, useState } from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/project.module.scss';
import detailProject from '../components/detailProject';
import ProjectCard from '../components/projectCard';
import animationData from '../public/Image/lottie/TestTech.json';
import Lottie from 'react-lottie';
const Project = () => {
    const [tag, setTag] = useState('');
    const tags = [
        { text: 'All Project', tag: '' },
        { text: 'Mobile Application', tag: 'Mobile Application' },
        { text: 'Web Application', tag: 'Web Application' },
        { text: 'Animation', tag: 'Animation' }
    ];
    const renderAnimation = () => {
        if (tag === 'Animation') {
            return (
                <div className={Styles.comingsoon}>
                    <div>
                        <Lottie options={defaultOptions} />
                    </div>
                    <h1>Coming Soon...</h1>
                </div>
            );
        }
    };
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
                        {tags.map(item => {
                            return (
                                <h2
                                    style={
                                        item.tag == tag
                                            ? { color: '#7e4dea' }
                                            : {}
                                    }
                                    onClick={() => {
                                        setTag(item.tag);
                                    }}
                                >
                                    {item.text}
                                </h2>
                            );
                        })}
                    </div>
                    <div className={Styles.project}>
                        {detailProject
                            .filter(project => project.tag.includes(tag))
                            .map(item => {
                                return <ProjectCard item={item} />;
                            })}
                    </div>
                    {renderAnimation()}
                </div>
            </Layout>
        </Fragment>
    );
};
export default Project;
