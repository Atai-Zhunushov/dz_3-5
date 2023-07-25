import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import userReducer from "./usersReducers";
import numberReducer from "./numbersReducer";

export const rootReducer = combineReducers({
    titleReducer,
    userReducer,
    numberReducer
})