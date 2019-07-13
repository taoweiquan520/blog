import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';

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
                <div className="blog-wrap">
                    <Header />
                    <Sidebar />
                    <div className="content-wrap">
                        <Switch>
                            <Route exact path="/" component={Content} />
                            <Route path="/category/:type" component={ArticleListWrap} />
                            <Route path="/article/:type" component={ArticleDetailWrap} />
                            {/* <Route component={NotFount} /> */}
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Provider>
        )
    }
}

export default Index;