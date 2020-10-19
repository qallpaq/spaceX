import {createStore} from "redux";
import {combineReducers} from "redux";
import {basicReducer, rocketsReducer, shipsReducer} from "./reducers";


const store = createStore(combineReducers({
    basic: basicReducer,
    rockets: rocketsReducer,
    ships: shipsReducer
}));

export default store;


window.store = store;