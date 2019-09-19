import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHotArticleList } from '../../actions/articleAction';
import Hot from './../common/Hot';

class ArticleRightSide extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getHotArticleList.asyncAction());
    }

    render () {
        const {hotList} = this.props;
        return (
            <div className="col-md-3 right">
                <Hot
                    className="aaa"
                    list={hotList}
                    title="阅读排行榜"
                />
                <div className="keyword-wrap">

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return state.latestReducer;
}
export default connect(mapStateToProps)(ArticleRightSide);