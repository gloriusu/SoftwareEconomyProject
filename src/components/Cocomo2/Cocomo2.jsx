import React, {useState} from 'react';
import Select from "../Select";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Delimiter from "../UI/Delimiter";
import classes from './Cocomo2.module.css';

import {useSelector, useDispatch} from "react-redux";
import {cocomo2Actions} from "../../store/cocomo2-slice";


const Cocomo2 = () => {

    const [codeLines, setCodeLines] = useState(null);
    const [toggleAssessment, setToggleAssessment] = useState(false);
    const [calculationResult, setCalculationResult] = useState(null);

    const {full, selectedSF, advancedData, detailedData} = useSelector(state => state.cocomo2);
    const dispatch = useDispatch();

    const assessmentChangeHandler = () => {
        setToggleAssessment(prevState => !prevState);
    }

    const inputChangeHandler = event => {
        setCodeLines(event.target.value);
    }

    const calculations = (dataset, size, A) => {
        let sf = 0;
        let eaf = 1;

        for (let i = 0; i < 5; i++) {
            if (selectedSF[i] === "n/a") {
                continue;
            } else {
                sf += +selectedSF[i];
            }
        }
        const E = 0.91 + 0.01 * sf;

        for (let i = 0; i < size; i++) {
            if (dataset[i] === "n/a") {
                continue;
            } else {
                eaf *= +dataset[i];
            }
        }
        const PM = eaf * A * (codeLines ** E);

        setCalculationResult(PM.toFixed(3));
    }

    const submitFormHandler = event => {
        event.preventDefault();
        !toggleAssessment && calculations(advancedData, 7, 2.94);
        toggleAssessment && calculations(detailedData, 17, 2.45);
    }

    const assessment = toggleAssessment ?
        full[1].map((item, index) => (
            <Select
                key={index}
                id={index}
                title={item[0]}
                data={item[1]}
                onChange={(event) => dispatch(
                    cocomo2Actions.changeSelectedDetailedOption({
                        id: index,
                        select: event.target.value,
                    }))
                }
            />
        ))
        :
        full[0].map((item, index) => (
            <Select
                key={index}
                id={index}
                title={item[0]}
                data={item[1]}
                onChange={(event) => dispatch(
                    cocomo2Actions.changeSelectedAdvancedOption({
                        id: index,
                        select: event.target.value,
                    }))
                }
            />
        ));

    return (
        <Card>
            <form className={classes.form} onSubmit={submitFormHandler}>

                <div className={classes['project-type']}>
                    <label htmlFor="select">Вибір стадії</label>
                    <select id="select" onChange={assessmentChangeHandler}>
                        <option value="advanced">Попередня Оцінка</option>
                        <option value="detailed">Детальна Оцінка</option>
                    </select>
                </div>

                <div className={classes.wrapper}>
                    <Input onChange={inputChangeHandler}/>
                    <div>
                        {full[2].map((item, index) => (
                            <Select
                                key={index}
                                id={index}
                                title={item[0]}
                                data={item[1]}
                                onChange={(event) => dispatch(
                                    cocomo2Actions.changeSelectedSFOption({
                                        id: index,
                                        select: event.target.value,
                                    }))
                                }
                            />
                        ))}
                        <Delimiter />
                        {assessment}
                    </div>
                </div>
                <Button/>
                {calculationResult && <div className={classes['calculations-info']}>
                    <p>Трудоємкість ---> {calculationResult}</p>
                </div>}
            </form>
        </Card>
    );
};

export default Cocomo2;