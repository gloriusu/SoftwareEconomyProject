import React from 'react';
import classes from './InputsTable.module.css';

import {useDispatch, useSelector} from "react-redux";
import {functionalPointsActions} from "../../store/func_points-slice";

const InputsTable = () => {

    const dispatch = useDispatch();
    const {tableDataset} = useSelector(state => state.functionalPoints);

    const tableHeaders = ['Measure', 'Simple', 'Average', 'Complex'];

    return (
        <div className={classes['table-wrapper']}>
            <table>
                <thead>
                <tr>
                    {tableHeaders.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Зовнішні вводи</td>
                    {tableDataset[0].map((item, index) => (
                        <td key={index}>
                            <input
                                type="number"
                                onChange={event => dispatch(functionalPointsActions.changeInputValue({
                                    id: item[1],
                                    value: event.target.value
                                }))}
                            />
                        </td>
                    ))}
                </tr>
                <tr>
                    <td>Зовнішні виводи</td>
                    {tableDataset[1].map((item, index) => (
                        <td key={index}>
                            <input
                                type="number"
                                onChange={event => dispatch(functionalPointsActions.changeInputValue({
                                    id: item[1],
                                    value: event.target.value
                                }))}
                            />
                        </td>
                    ))}
                </tr>
                <tr>
                    <td>Зовнішні запити</td>
                    {tableDataset[2].map((item, index) => (
                        <td key={index}>
                            <input
                                type="number"
                                onChange={event => dispatch(functionalPointsActions.changeInputValue({
                                    id: item[1],
                                    value: event.target.value
                                }))}
                            />
                        </td>
                    ))}
                </tr>
                <tr>
                    <td>Локальні внутрішні логічні файли</td>
                    {tableDataset[3].map((item, index) => (
                        <td key={index}>
                            <input
                                type="number"
                                onChange={event => dispatch(functionalPointsActions.changeInputValue({
                                    id: item[1],
                                    value: event.target.value
                                }))}
                            />
                        </td>
                    ))}
                </tr>
                <tr>
                    <td>Зовнішні інтерфейсні файли</td>
                    {tableDataset[4].map((item, index) => (
                        <td key={index}>
                            <input
                                type="number"
                                onChange={event => dispatch(functionalPointsActions.changeInputValue({
                                    id: item[1],
                                    value: event.target.value
                                }))}
                            />
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InputsTable;