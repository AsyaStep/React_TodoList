import { combineReducers } from "redux";
import taskReducer from "./todos";
import modalReducer from "./modals"

const rootReducer = combineReducers({
    taskReducer,
    modalReducer,
});

export default rootReducer;