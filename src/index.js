import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import {HashRouter as Router} from "react-router-dom";
import SelectorContextProvider from "./components/context/selector-context";


ReactDOM.render(
    <Provider store={store}>
        <SelectorContextProvider>
            <ErrorBoundry>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundry>
        </SelectorContextProvider>
    </Provider>,
    document.getElementById('root'));