import React, { Fragment } from 'react';
import Styles from '../styles/footer.module.scss';

const footer = () => {
    return (
        <div className={Styles.footer}>
            <div className={Styles.footer__content}>
                <div>
                    <img src='/Image/Facebook.svg' alt='Facebook Logo' />
                    <img src='/Image/LinkedIN.svg' alt='LinkIn Logo' />
                    <img src='/Image/Github.svg' alt='Github Logo' />
                </div>
                <h2>Copy right 2021 by rabbito</h2>
            </div>
        </div>
    );
};

export default footer;
