import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './css/hot.css';

class Hot extends React.Component {
    render () {
        const hotList = [
            {
                article_id: 1,
                title: '我是一个hot标题,我超出一行了,会有省略号',
                view: 125
            },
            {
                article_id: 2,
                title: '我是一个hot标题',
                view: 126
            },
            {
                article_id: 3,
                title: '我是一个hot标题,我超出一行了,会有省略号',
                view: 127
            },
            {
                article_id: 4,
                title: '我是一个hot标题',
                view: 128
            },
            {
                article_id: 5,
                title: '我是一个hot标题,我超出一行了,会有省略号',
                view: 129
            }
        ];
        return (
            <div className="col-md-3 right">
                <div className="hot-list">
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
                </div>
                <div className="keyword-wrap">

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return state.appReducer;
}
export default connect(mapStateToProps)(Hot);