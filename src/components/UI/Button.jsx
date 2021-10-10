import React from 'react';
import classes from './Button.module.css';

const Button = () => {
    return (
        <div className={classes['button-wrapper']}>
            <button>Розрахувати</button>
        </div>
    );
};

export default Button;