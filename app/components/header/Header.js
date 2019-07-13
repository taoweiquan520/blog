import React from 'react';
import { connect } from 'react-redux';
import './css/header.css';
import { appActions } from '../../actions/appAction';

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
        return (
            <div className="header">
                <div className="header-top">
                    <h2 className="header-h"></h2>
                    <div className="headers-links">
                        <a className="text-white sign-in" onClick={this.signIn.bind(this)}>sign in</a>
                        <span>or</span>
                        <a className="text-white sign-up" onClick={this.signUp.bind(this)}>sign up</a>
                    </div>
                    <div className="header-searchbar">
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.search();
                        }}>
                            <input className="search-input" type="text" />
                            <button className="search-btn">搜索</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Header);