import axios from 'axios';
import { types } from './types';
import { appActions } from './appAction';

// 查看文章列表
// const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';
export const getArticleList = {
    asyncAction: function(posts) {
        const self = this;
        return (dispatch) => {
            dispatch(appActions.fetchStart());
            return axios({
                method: 'post',
                url: '/api/article/getArticles.json',
                data: {
                    category: posts
                }
            })
                .then(json => {
                    dispatch(self.action(json.data));
                    dispatch(appActions.fetchSuccess());
                })
                .catch(err =>{
                    console.log('err', err)
                    dispatch(appActions.fetchFail(err));
                });
        }
    },
    action: (data) => {  //data：后天返回的文章列表数据
        return {
            type: types.GET_ARTICLE_LIST,
            payload: {
                data
            }
        }
    }
}

// 添加文章动作
// const ADD_ARTICLE = 'ADD_ARTICLE';
export const addArticle = {
    asyncAction: function(posts) {
        return (dispatch) => {
            dispatch(appActions.fetchStart());
            return fetch(`~~~~`)
                .then(res => res,
                    err => {
                        console.log('err', err)
                        dispatch(appActions.fetchFail(err));
                    }
                )
                .then(json => {
                    // posts的articleId可以通过算法算出
                    dispatch(this.action());
                    dispatch(appActions.fetchSuccess());
                });
        }
    },
    action: () => {    // articleId: 文章id
        return {
            type: types.ADD_ARTICLE
        }
    }
}

// 查看文章动作
// const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL';
export const seeArticleDetail = {
    asyncAction: function(posts) {
        return (dispatch) => {
            dispatch(appActions.fetchStart());
            return fetch(`~~~~`)
                .then(res => res,
                    err => {
                        console.log('err', err)
                        dispatch(appActions.fetchFail(err));
                    }
                )
                .then(json => {
                    dispatch(this.action(posts.articleId, json));
                    dispatch(appActions.fetchSuccess());
                });

        }
    },
    action: (articleId, data) => {  // articleId: 文章id ； data：后台返回的文章详情
        return {
            type: types.GET_ARTICLE_DETAIL,
            payload: {
                articleId,
                data
            }
        }
    }
}