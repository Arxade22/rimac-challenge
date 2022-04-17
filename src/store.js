import {createStore,combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
//reducers
import amountReducer from "./reducers/amountReducer";
import authReducer from "./reducers/authReducer";
import rootReducer from "./reducers/rootReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
    rootReducer,
    amountReducer,
    authReducer
});

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;