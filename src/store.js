import {createStore} from "redux";
import {combineReducers} from "redux";
import {basicReducer, rocketsReducer, shipsReducer, dragonsReducer} from "./reducers";


const store = createStore(combineReducers({
    basic: basicReducer,
    rockets: rocketsReducer,
    ships: shipsReducer,
    dragons: dragonsReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


window.store = store;