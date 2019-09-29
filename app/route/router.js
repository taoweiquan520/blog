import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import Index from '../components/Index';


import NotFount from '../components/NotFount';
import connectRoute from '../common/connectRoute';
import Content from '../components/content/Content';
import ArticleList from '../components/content/Content_articleList';
import ArticleDetail from '../components/content/Content_articleDetail';

const ArticleListWrap = connectRoute(ArticleList);
const ArticleDetailWrap = connectRoute(ArticleDetail);


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
            <switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/category/:type" component={Index} />
                <Route exact path="/login" component={Index} />
                {/* <Route path="/category/:type" component={ArticleListWrap} />
                <Route path="/article/:type" component={ArticleDetailWrap} />
                <Route path="*" component={NotFount} /> */}
            </switch>
        </Router>
    </Provider>
)

export default route;
