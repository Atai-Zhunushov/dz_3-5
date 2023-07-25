import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import { addUserAction, changeInputAction, deleteUserAction} from "../../redux/actions";
import User from "../../components/user";

const UsersPages = () => {

    const dispatch = useDispatch()
    const {value , users}  = useSelector(state => state.userReducer)

    const changeInput = (e) => {
        dispatch(changeInputAction(e.target.value))
    }

    const addUsers = () => {
        dispatch(addUserAction(value))
    }

    const deleteUsers = () => {
        dispatch(deleteUserAction(users))
    }
    return (
        <div>
            <input type="text" placeholder="name" onChange={changeInput} value={value}/>
            <button onClick={addUsers}>add</button>
            <button onClick={deleteUsers}>delete all</button>

            {users.map((user , idx) => <User key={idx} userName={user}/>)}
        </div>
    );
};

export default UsersPages;