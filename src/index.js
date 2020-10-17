import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import MySpaceContext from "./components/space-context/space-context";
import {HashRouter as Router} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <MySpaceContext>
                <Router>
                    <App/>
                </Router>
            </MySpaceContext>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));