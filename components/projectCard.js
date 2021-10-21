import Styles from '../styles/project.module.scss';
import Link from 'next/link';
const ProjectCard = ({item}) => {
    const renderImg = () => {
        if (item.name === 'Setthi') {
            return (
                <img
                    src={item.img}
                    className={Styles.project_card__mobile}
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
                <div className={Styles.project_card__footer}>
                    <div>
                        <h1>{item.name}</h1>
                        <h1>View More ></h1>
                    </div>
                </div>
                <div className={Styles.project_tag}>{item.tag}</div>
            </div>
        </Link>
    );
};
export default ProjectCard;
