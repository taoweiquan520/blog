import React from 'react';
import { connect } from 'react-redux';
import './css/header.less';
import { appActions } from '../../actions/appAction';
import iconSearch from '../../static/images/icon-search.png';
import refresh from '../../static/images/refresh.png';

class Header extends React.Component {
    signIn() {
        const { dispatch } = this.props;

        dispatch(appActions.fetchStart());
        $.ajax({
            url: '/api/user/signIn.json',
            type: 'post',
            data: {
                username: 'taoweiquan',
                password: '1234566'
            },
            success:  (res) => {
                if (res) {
                    dispatch(appActions.fetchSuccess())
                } else {
                    dispatch(appActions.fetchFail(res))
                }
            },
            error: (err) => {
                dispatch(appActions.fetchFail(err));
                console.log(err)
            }
        })
    }

    signUp() {
        const { dispatch } = this.props;
        
        dispatch(appActions.fetchStart());
        $.ajax({
            url: '/api/user/signUp.json',
            type: 'post',
            data: {
                username: 'taoweiquan',
                email: '347499586@qq.om',
                password: '1234566',
                confirm: '123455',
                agreement: true
            },
            success: (res) => {
                if (res.status) {
                    dispatch(appActions.fetchSuccess());
                } else {
                    dispatch(appActions.fetchFail(res))
                }
            },
            error: (err) => {
                dispatch(appActions.fetchFail(err));
                console.log(err)
            }
        })
    }

    search() {
        console.log('search')
    }

    render() {
        const searchHotList = [
            {tagName: '支付宝', id: 'alipay'},
            {tagName: '微信', id: 'wechat'},
            {tagName: '蚂蚁金服', id: 'mayijinfu'},
            {tagName: '诈骗', id: 'alipay'},
            {tagName: '借呗', id: 'alipay'},
            {tagName: '被骗', id: 'alipay'},
            {tagName: '盗窃', id: 'alipay'},
            {tagName: 'pandas', id: 'alipay'},
            {tagName: 'TensorFlow', id: 'alipay'},
            {tagName: 'pyecharts', id: 'alipay'},
        ];
        return (
            <div className="header">
                <div className="header-top">
                    <h2 className="header-h">首页</h2>
                    <div className="header-searchbar">
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.search();
                        }}>
                            <input className="search-input" placeholder="搜索" type="text" />
                            <a className="search-btn iconfont">
                                <img className="icon-search" src={iconSearch} />
                            </a>
                            <div className="searchbar-hot">
                                <div className="search-trend-header">
                                    <span>热门搜索</span>
                                    <a>
                                        <img className="refresh" src={refresh} />
                                        换一批
                                    </a>
                                </div>
                                <ul className="search-trend-tag-wrap">
                                {
                                    searchHotList.map((item, index) => (
                                        <li key={index}>
                                            <a href={`/sarch?id=${item.id}`}>{item.tagName}</a>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="headers-links">
                        <a className="btn loing-in">登录</a>
                        <a className="btn sign-in" onClick={this.signIn.bind(this)}>注册</a>
                        <a className="btn sign-up" onClick={this.signUp.bind(this)}>写文章</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Header);