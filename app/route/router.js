import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, IndexRoute, BrowserRouter as Router, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import Index from '../components/Index';

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const route = (
    <Provider store={store}>
        <Router>
            <Index />
        </Router>
    </Provider>
)

export default route;
