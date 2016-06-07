import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './utils/create-store';
import routes from './bootstrap/routes';
import { ReduxRouter } from 'redux-router';
import createObservables from './bootstrap/create-observables';

const store = createStore(routes);
createObservables(store);

var warn = console.warn;
console.warn = function (warning) {
    if (/(setState)/.test(warning)) {
        throw new Error(warning);
    }
    warn.apply(console, arguments);
};

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter>
            {routes}
        </ReduxRouter>
    </Provider>,
    document.getElementById('root')
);
