import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';
import { getArticleList } from '../../actions/articleAction';
import { article } from '../../../public/article.js';

// css
import './css/content_articleList.css';
// import '../../../mock';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageSize: 0,
            pageNum: 1
        }
    }

    componentDidMount() {
        const {dispatch, match} = this.props;
        
        dispatch(getArticleList.asyncAction(match.params.type));
        this.setState({
            list: article.list,
            pageSize: article.pageSize,
            pageNum: article.pageNum
        })
    }

    componentWillUpdate(nextProps) {
        // console.log(nextProps);
    }

    render() {
        const {match, allIds} = this.props;
        // 获取img中的src正则
        const imgReg = /<img.*?(?:>|\/>)/gi;
        const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;

        const renderArticleList = 
            allIds.map((item, index) => {
                const img = item.content.match(imgReg);
                const imgSrc = img[0] ? img[0].match(srcReg) : '';
                debugger
                return <div className={imgSrc[1] ? "article-list has-img" : "article-list"} key={index}>
                    <div className="inner">
                        <h2 className="article-title"><Link className="article-link" to={`/article/${item.article_id}`}>{item.title}</Link></h2>
                        <p className="abstract">
                            {item.content.slice(0, 15)}
                        </p>
                        <div className="article-tool">
                            <span className="article-date">{item.create_time}</span>
                            <span className="article-more"><Link to={`/article/${item.article_id}`}>Read more<i>></i></Link></span>
                        </div>
                    </div>
                    {
                        imgSrc[1] ?
                            <a className="wrap-img">
                                <img src={imgSrc[1]} />
                            </a> 
                            : ''
                    }
                </div>
            });   

        return (
            <div className="col-md-10 content-list middle">
                <CSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                {
                    allIds.length > 0 ? renderArticleList : 
                    <div className="empty">无列表</div>
                }
                </CSSTransitionGroup>
                {
                    this.state.pageSize > 0 ? (
                    <div className="pagination">
                        {
                            this.state.pageNum != 1 && this.state.pageNum <= this.state.totalPage ? 
                                (<Link className="pagination-item" to={`${match.url}/${this.state.pageNum - 1}`}>prev</Link>) : <span></span>
                        }
                        <span className="pagination-page">Page 1 of 1</span>
                        {
                            this.state.pageNum != 1 && this.state.pageNum <= this.state.totalPage ? 
                                (<Link className="pagination-item" to={`${match.url}/${this.state.pageNum + 1}`}>next</Link>) : <span></span>
                        }
                    </div>) : ''
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return state.articleReducer;
};

export default connect(
    mapStateToProps
)(ArticleList);