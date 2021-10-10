import React, {useState, Fragment} from 'react';
import classes from './BasicModel.module.css';
import Button from "../../UI/Button";
import Card from "../../UI/Card";


const BASIC_DATASET = {
    organic: [2.4, 1.05, 2.5, 0.38],
    semi_independent: [3.0, 1.12, 2.5, 0.35],
    embedded: [3.6, 1.20, 2.5, 0.32]
}


const BasicModel = () => {

    const [projectType, setProjectType] = useState(Object.keys(BASIC_DATASET)[0]);
    const [codeLines, setCodeLines] = useState(null);
    const [typeData, setTypeData] = useState([]);

    const selectChangeHandler = (event) => {
        setProjectType(event.target.value);
    }

    const inputChangeHandler = (event) => {
        setCodeLines(event.target.value);
    }

    const calculations = () => {
        const pm = BASIC_DATASET[projectType][0] * (codeLines ** BASIC_DATASET[projectType][1]);
        const tm = BASIC_DATASET[projectType][2] * (pm ** BASIC_DATASET[projectType][3]);
        const ss = pm / tm;
        const p = codeLines / pm;
        setTypeData([pm.toFixed(3), tm.toFixed(3), ss.toFixed(3), p.toFixed(3)]);
    }

    const submitFormHandler = event => {
        event.preventDefault();
        calculations();
    }

    return (
        <Fragment>
            <div className={classes.header}>
                <h1>Basic Model</h1>
            </div>
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler}>

                    <div className={classes['project-type']}>
                        <label htmlFor="select">Тип проекту</label>
                        <select id="select" value={projectType} onChange={selectChangeHandler}>
                            <option value={Object.keys(BASIC_DATASET)[0]}>Органічний</option>
                            <option value={Object.keys(BASIC_DATASET)[1]}>Напівзалежний</option>
                            <option value={Object.keys(BASIC_DATASET)[2]}>Вбудований</option>
                        </select>
                    </div>

                    <div className={classes.wrapper}>
                        <div className={classes['code-lines']}>
                            <label htmlFor="code-lines">Введіть кількість рядків коду(1 - тисяча рядків)</label>
                            <input
                                id="code-lines"
                                type="number"
                                onChange={inputChangeHandler}
                                step={0.1}
                                min={0.1}
                                required={true}
                            />
                        </div>

                        <div className={classes.calculations}>
                            <div>
                                <p>Трудоємкість: <span>{typeData[0]}</span></p>
                            </div>
                            <div>
                                <p>Час розробки в календарних місяцях: <span>{typeData[1]}</span></p>
                            </div>
                            <div>
                                <p>Середня чисельність персоналу: <span>{typeData[2]}</span></p>
                            </div>
                            <div>
                                <p>Продуктивність: <span>{typeData[3]}</span></p>
                            </div>
                        </div>
                    </div>
                    <Button/>
                </form>
            </Card>
        </Fragment>
    );
};

export default BasicModel;