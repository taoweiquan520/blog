import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHotArticleList } from '../../actions/articleAction';
import ArticleRightSide from './../common/ArticleRightSide';

class Hot extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getHotArticleList.asyncAction());
    }

    render () {
        const {hotList} = this.props;
        return (
            <div className="col-md-3 right">
                {/* <div className="hot-list">
                    <div className="hot-list-title">阅读排行榜</div>
                {
                    hotList.map((item, index) => (
                        <Link 
                            to={`/article/${item.article_id}`}
                            title={item.title}
                            key={index}
                        >
                            {`${index + 1}. ${item.title}`}
                        </Link>
                    ))
                }
                </div> */}
                <ArticleRightSide
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
export default connect(mapStateToProps)(Hot);