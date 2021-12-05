import reducerCounter from "./counter/reducer";
import reducerUsers from "./users/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counter: reducerCounter,
    users: reducerUsers
})

export default rootReducer;