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

const InitCom = () => (
    <Fragment>
        <Route exact path="/" render={() =>
            <Fragment>
                <Sidebar />
                <Content />
                <ArticleRightSide />
            </Fragment>
        } />
        <Route exact path="/category/:type" render={() =>
            <Fragment>
                <Sidebar />
                <ArticleListWrap />
                <ArticleRightSide />
            </Fragment>
        } />
        <Route exact path="/article/:id" component={ArticleDetailWrap} />
    </Fragment>
)

class Index extends React.Component {
    render() {
        return (
            <div className="blog-wrap">
                <Header />
                <div className="container index">
                    <div className="row">
                        <InitCom />
                    </div>
                </div>
                <Footer />
                <Loading />
            </div>
        )
    }
}

export default Index;