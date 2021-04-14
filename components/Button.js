import style from '../styles/button.module.scss';
const Button = () => {
    return (
        <a href='about' className={style.btn11}>
            <span>About Me</span>
            <div className={style.transition}></div>
        </a>
    );
};
export default Button;
