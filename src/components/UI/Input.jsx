import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes['code-lines']}>
            <label htmlFor="code-lines">Введіть кількість рядків коду(1 - тисяча рядків)</label>
            <input
                id="code-lines"
                type="number"
                onChange={props.onChange}
                step={0.1}
                min={0.1}
                required={true}
            />
        </div>
    );
};

export default Input;