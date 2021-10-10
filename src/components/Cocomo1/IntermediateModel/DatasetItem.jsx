import classes from './DatasetItem.module.css';

import {useSelector, useDispatch} from "react-redux";
import {cocomo1Actions} from "../../../store/cocomo1-slice";


const DatasetItem = props => {

    const {selected} = useSelector(state => state.cocomo1);
    const dispatch = useDispatch();

    const selectChangeHandler = event => {
        dispatch(cocomo1Actions.addSelectedOption({
            id: props.id,
            select: event.target.value,
        }));
    }


    return (
        <div className={classes['parameter-item']}>
            <label>{props.header}</label>
            <select value={selected[props.id]} onChange={selectChangeHandler}>
                {props.data.map((value, index) => (
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default DatasetItem;