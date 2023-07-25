import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNumbersAction, changeInputAction, deleteNumbersAction} from "../../redux/actions";
import User from "../../components/user";
import Number from "../../components/number";

const NumbersPage = () => {
    const dispatch = useDispatch()
    const {value , numbers} = useSelector(state => state.numberReducer)

    const changeInputNumber = (e) => {
        dispatch(changeInputAction(e.target.value))
    }

    const addNumbers = () => {
        dispatch(addNumbersAction(value))
    }

    const deleteNums = () => {
        dispatch(deleteNumbersAction(numbers))
    }
    return (
        <div>
            <input type="number" onChange={changeInputNumber} value={value}/>
            <button onClick={addNumbers}>add</button>
            <button onClick={deleteNums}>clear</button>
            {numbers.map((number , idx) => <Number key={idx} numbersPage={number}/> )}
        </div>
    );
};

export default NumbersPage;