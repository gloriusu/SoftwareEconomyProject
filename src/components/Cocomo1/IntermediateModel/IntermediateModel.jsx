import {Fragment, useState} from 'react';

import classes from './IntermediateModel.module.css';
import DatasetItem from "./DatasetItem";

import {useSelector} from "react-redux";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Card from "../../UI/Card";


const COEFFICIENTS = {  // coefficients
    organic: [3.2, 1.05],
    semi_independent: [3, 1.12],
    embedded: [2.8, 1.2],
}


const IntermediateModel = () => {

    const [codeLines, setCodeLines] = useState(null);
    const [projectType, setProjectType] = useState(Object.keys(COEFFICIENTS)[0]);
    const [calculationData, setCalculationData] = useState(null);


    const {full, selected} = useSelector(state => state.cocomo1);


    const inputChangeHandler = event => {
        setCodeLines(event.target.value);
    }

    const selectChangeHandler = event => {
        setProjectType(event.target.value);
    }

    const calculations = () => {
        let eaf = 1;
        for (let i = 0; i < 15; i++) {
            if (selected[i] === "n/a") {
                continue;
            } else {
                eaf *= selected[i];
            }
        }
        setCalculationData(eaf * COEFFICIENTS[projectType][0] * (codeLines ** COEFFICIENTS[projectType][1]));

    }

    const submitFormHandler = event => {
        event.preventDefault();
        calculations()
    }

    return (
        <Fragment>
            <div className={classes.header}>
                <h1>Intermediate Model</h1>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler}>

                    <div className={classes['project-type']}>
                        <label htmlFor="select">Тип проекту</label>
                        <select id="select" value={projectType} onChange={selectChangeHandler}>
                            <option value={Object.keys(COEFFICIENTS)[0]}>Розповсюджений</option>
                            <option value={Object.keys(COEFFICIENTS)[1]}>Напівнезалежний</option>
                            <option value={Object.keys(COEFFICIENTS)[2]}>Вбудований</option>
                        </select>
                    </div>
                    <div className={classes.wrapper}>
                        <Input onChange={inputChangeHandler}/>
                        <div>
                            {full.map((item, index) => (
                                <DatasetItem
                                    key={index}
                                    id={index}
                                    header={item[0]}
                                    data={item[1]}
                                />
                            ))}
                        </div>
                    </div>
                    <Button/>
                    {calculationData && <div className={classes['calculations-info']}>
                        <p>Трудоємкість ---> {calculationData.toFixed(3)}</p>
                    </div>}
                </form>
            </Card>
        </Fragment>
    );
};

export default IntermediateModel;