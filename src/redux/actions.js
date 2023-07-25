import {types} from "./type";
export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value) {
    return {
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction(name) {
    return {
        type: types.ADD_USER,
        payload: name
    }
}

export function deleteUserAction(deletes) {
    return {
        type: types.DELETE_USER,
        payload: deletes
    }
}

export function addNumbersAction(numbers) {
    return {
        type: types.ADD_NUMBERS,
        payload: numbers
    }
}

export function deleteNumbersAction(deleteNum) {
    return {
        type: types.CLEAR_NUMBERS,
        payload: deleteNum
    }
}