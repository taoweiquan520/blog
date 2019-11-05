import React, { Fragment } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// js module
import rootReducer from '../reducers/rootReducer';
import NotFount from './NotFount';
import Header from './header/Header';
import Sidebar from './content/Sidebar';
import ArticleRightSide from'../components/content/ArticleRightSide';
import Content from './content/Content';
import ArticleList from './content/Content_articleList';
import ArticleDetail from './content/Content_articleDetail';
import Footer from './footer/Footer';
import Loading from '../common/Loading';
import connectRoute from '../common/connectRoute';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
const ArticleListWrap = connectRoute(ArticleList);
const ArticleDetailWrap = connectRoute(ArticleDetail);


class Index extends React.Component {
    render() {
        return (
            <div className="blog-wrap">
                <Header />
                <div className="container index">
                    <Route path="/" exact render={() => (
                        <div className="row">
                            <Sidebar />
                            <Content />
                            <ArticleRightSide />
                        </div>
                    )} />
                    <Route path="/category/:type" render={({match}) => (
                        <div className="row">
                            <Sidebar />
                            <ArticleListWrap match={match} />
                            <ArticleRightSide />
                        </div>
                    )} />
                    <Route path="/article/:type" component={ArticleDetailWrap} />
                </div>
                <Footer />
                <Loading />
            </div>
        )
    }
}

export default Index;