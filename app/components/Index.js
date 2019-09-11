import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// js module
import rootReducer from '../reducers/rootReducer';
import NotFount from './NotFount';
import Header from './header/Header';
import Sidebar from './content/Sidebar';
import Content from './content/Content';
import ArticleList from './content/Content_articleList';
import ArticleDetail from './content/Content_articleDetail';
import Footer from './footer/Footer';
import connectRoute from '../common/connectRoute';
// css
import '../static/css/reset.css';
import '../static/css/main.css';

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
            <Provider store = {store}>
                <Router>
                <div className="blog-wrap">
                        <Header />
                        <div className="container index">
                            <div className="row">
                                <Sidebar />
                                <Switch>
                                    <Route exact path="/" component={Content} />
                                    <Route path="/category/:type" component={ArticleListWrap} />
                                    <Route path="/article/:type" component={ArticleDetailWrap} />
                                    {/* <Route component={NotFount} /> */}
                                </Switch>
                            </div>
                        </div>
                        <Footer />
                </div>
                </Router>
            </Provider>
        )
    }
}

export default Index;