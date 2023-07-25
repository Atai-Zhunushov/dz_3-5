import {types} from "../type";
const initialState = {
    value: '',
    numbers: []
}

export default function numberReducer(state = initialState, action) {
    switch (action.type) {
        case types.VALUE :
            return {...state ,value: action.payload}
        case types.ADD_NUMBERS :
            const newNumber = parseInt(state.value)
            if (!isNaN(newNumber)) {
                const sum = state.numbers.reduce((acc, number) => acc + number, 0);
                return {...state , numbers: [...state.numbers , newNumber + sum] , value: ''}
            }
            return state
        case types.CLEAR_NUMBERS :
            return {...state , numbers: [] , value: ''}
        default : return state
    }
}