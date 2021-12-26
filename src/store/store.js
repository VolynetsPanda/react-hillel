import {applyMiddleware, createStore} from "redux";
import rootReducer from "../modules";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {logMiddleware} from "../middleware/logMiddleware";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logMiddleware, thunk)))

export default store;