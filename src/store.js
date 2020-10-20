import {createStore} from "redux";
import {combineReducers} from "redux";
import {basicReducer, rocketsReducer, shipsReducer} from "./reducers";


const store = createStore(combineReducers({
    basic: basicReducer,
    rockets: rocketsReducer,
    ships: shipsReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


window.store = store;