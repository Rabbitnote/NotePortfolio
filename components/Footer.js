import {Fragment} from 'react';
import style from '../styles/Footer.module.scss';
const Footer =()=>{
    return (<Fragment>
        <div className={style.container}>
            <div className={style.content}>
                <img src="/rabbit.png" className={style.pic} />
            MADE BY RABBIT
            </div>
        </div>
    </Fragment>);
}
export default Footer;