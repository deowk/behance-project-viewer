import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import * as reducers from '../reducers/index';
import promiseMiddleware from './promise-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import { createHistory, useBasename } from 'history';

const createAppHistory = useBasename(createHistory)({ basename: '/'});

let middleware;

const loggerMiddleware = createLogger();
middleware = applyMiddleware(promiseMiddleware, thunk, loggerMiddleware);

/**
 * Sets up the redux store.  Responsible for loading up the reducers and middleware.
 *
 * @param routes
 */
export default function create(routes) {
    const composedReducers = combineReducers({
        router: routerStateReducer,
        ...reducers
    });
    const finalCreateStore = compose(middleware,
        reduxReactRouter({
            routes,
            createHistory: () => createAppHistory
        }))(createStore);
    let store = finalCreateStore(composedReducers);
    return store;
}
