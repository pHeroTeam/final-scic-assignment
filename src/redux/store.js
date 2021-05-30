import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/orderReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const combineReducer = combineReducers({
    orders : orderReducer,
})

export const store = createStore(combineReducer, composeWithDevTools());