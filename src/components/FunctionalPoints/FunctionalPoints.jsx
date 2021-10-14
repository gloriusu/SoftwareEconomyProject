import React, {useState} from 'react';
import Card from "../UI/Card";
import InputsTable from "./InputsTable";
import Delimiter from "../UI/Delimiter";
import Button from "../UI/Button";
import Select from "../Select";
import selectClasses from "../Select.module.css";
import classes from "./FunctionalPoints.module.css";

import {useDispatch, useSelector} from "react-redux";
import {functionalPointsActions} from "../../store/func_points-slice";


const LANGUAGE_COEFFICIENTS = [
    [['Пакетні файли DOS'], [128]],
    [['Basic'], [107]],
    [['PL/1'], [80]],
    [['C#'], [58]],
    [['Розширений LISP'], [56]],
    [['Java'], [55]],
    [['JavaScript'], [54]],
    [['C++'], [53]],
    [['Visual Basic'], [50]],
    [['Мови баз даних'], [40]],
    [['Access'], [38]],
    [['VBScript'], [38]],
    [['Мови підтримки прийняття'], [35]],
    [['FoxPro 2.5'], [34]],
    [['DELPHI'], [29]],
    [['Стандартні обєктно орієнтовані'], [29]],
    [['VB.Net'], [28]],
    [['Стандартні 4-го покоління'], [20]],
    [['HTML 3.0'], [15]],
    [['SQL'], [13]],
    [['SQL Forms'], [11]],
    [['Excel'], [6]],
];

const COEFFICIENTS = {
    organic: [2.4, 1.05],
    semi_independent: [3.0, 1.12],
    embedded: [3.6, 1.20],
}

const FunctionalPoints = () => {

    const dispatch = useDispatch();

    const [languageCoefficient, setLanguageCoefficient] = useState(+LANGUAGE_COEFFICIENTS[0][1]);
    const [calculationResult, setCalculationResult] = useState(null);
    const [projectType, setProjectType] = useState(Object.keys(COEFFICIENTS)[0]);

    const {inputDataset, environmentFactors, coefficients} = useSelector(state => state.functionalPoints)

    const selectChangeHandler = event => {
        setProjectType(event.target.value);
    }

    const calculations = () => {
        let UFP = 0;
        let temp = 0;
        let N = 0;
        for (let i = 1; i <= 15; i++) {
            temp += inputDataset[i][0] * inputDataset[i][1];
            if (i % 3 === 0) {
                UFP += temp;
                temp = 0;
            }
        }

        for (let i = 0; i < 14; i++) {
            N += +coefficients[i];
        }

        const CAF = 0.65 + (0.01 * N);
        const AFP = UFP * CAF;
        const V = languageCoefficient * AFP;
        const P = V / 1000;
        const T = COEFFICIENTS[projectType][0] * (P ** COEFFICIENTS[projectType][1]);


        setCalculationResult([UFP, CAF, AFP, V, P, T]);
    }


    const submitFormHandler = event => {
        event.preventDefault();
        calculations();
    }

    return (
        <Card>
            <form onSubmit={submitFormHandler}>
                <InputsTable/>
                <Delimiter/>
                <div className={classes.wrapper}>
                    <div>
                        {environmentFactors[0].map((item, index) => (
                            <Select
                                key={index}
                                id={index}
                                title={item}
                                data={environmentFactors[1]}
                                onChange={(event) => dispatch(
                                    functionalPointsActions.changeCoefficient({
                                        id: index,
                                        select: event.target.value,
                                    }))
                                }
                            />
                        ))}
                    </div>
                </div>
                <Delimiter/>
                <div className={classes['project-type']}>
                    <label htmlFor="select">Тип проекту</label>
                    <select id="select" value={projectType} onChange={selectChangeHandler}>
                        <option value={Object.keys(COEFFICIENTS)[0]}>Органічний</option>
                        <option value={Object.keys(COEFFICIENTS)[1]}>Напівзалежний</option>
                        <option value={Object.keys(COEFFICIENTS)[2]}>Вбудований</option>
                    </select>
                </div>
                <div className={selectClasses['parameter-item']}>
                    <label>Таблиця відповідності кількості рядків коду на одну функціональну точку</label>
                    <select value={languageCoefficient}
                            onChange={(event) => setLanguageCoefficient(event.target.value)}
                    >
                        {LANGUAGE_COEFFICIENTS.map(item => (
                            <option value={item[1]} key={Math.random()}>{item[0]}</option>
                        ))}
                    </select>
                </div>

                <Button/>
            </form>
            {calculationResult && <div className={classes['calculations-info']}>
                <p>UFP ---> {calculationResult[0]}</p>
                <p>CAF ---> {calculationResult[1]}</p>
                <p>AFP ---> {calculationResult[2]}</p>
                <p>V ---> {calculationResult[3]}</p>
                <p>P ---> {calculationResult[4]}</p>
                <p>T ---> {calculationResult[5]}</p>
            </div>}

        </Card>
    );
};

export default FunctionalPoints;