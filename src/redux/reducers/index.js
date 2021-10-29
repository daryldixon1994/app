import { combineReducers } from "redux";
import studentsReducer from "./students";

const rootReducer = combineReducers({
    studentsReducer,
});

export default rootReducer;
