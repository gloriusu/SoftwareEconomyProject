import React from 'react';
import classes from "./Select.module.css";

const Select = props => {

    return (
        <div className={classes['parameter-item']}>
            <label>{props.title}</label>
            <select onChange={props.onChange}>
                {props.data.map((value, index) => (
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;