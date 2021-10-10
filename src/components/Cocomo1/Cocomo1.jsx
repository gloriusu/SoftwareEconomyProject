import React, {Fragment, useState} from 'react';
import BasicModel from "./BasicModel/BasicModel";
import IntermediateModel from "./IntermediateModel/IntermediateModel";
import classes from './Cocomo1.module.css';


const Cocomo1 = () => {
    const [modelChanger, setModelChanger] = useState(true);

    const selectChangeHandler = event => {
        setModelChanger(prevState => !prevState);
    }

    const model = modelChanger ? <BasicModel /> : <IntermediateModel />

    return (
        <Fragment>
            <div className={classes["model-level"]}>
                <label htmlFor="model">Оберіть рівень моделі Cocomo</label>
                <select id="model" onChange={selectChangeHandler}>
                    <option value="basic">Базовий</option>
                    <option value="intermediate">Проміжний</option>
                </select>
            </div>
            {model}
        </Fragment>
    );
};

export default Cocomo1;