import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './Content_articleList';

class Content extends React.Component {
    render() {
        return (
            <div className="col-md-7 content-list middle">
                {/* <ArticleList /> */}
                content module
            </div>
        )
    }
}

export default Content;