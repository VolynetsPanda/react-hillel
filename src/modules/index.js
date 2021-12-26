import reducerCounter from "./counter/reducer";
import reducerUsers from "./users/reducer";
import reducerRole from "./role/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counter: reducerCounter,
    users: reducerUsers,
    role: reducerRole
})

export default rootReducer;