import React from 'react';
import classes from "./SelectItem.module.css";

const SelectItem = props => {

    return (
        <div className={classes['parameter-item']}>
            <label>{props.header}</label>
            <select onChange={props.onChange}>
                {props.data.map((value, index) => (
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectItem;