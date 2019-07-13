import fetch from 'cross-fetch';
import { types } from './types';
import { appActions } from './appAction';

// 添加评论动作
// const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = {
    asyncAction: (posts) => {
        return (dispatch) => {
            dispatch(appActions.fetchStart());
            return fetch(`~~~~`)
                .then(res => res,
                    err => {
                        console.log('err', err);
                        dispatch(appActions.fetchFail(err));
                    }
                )
                .then(json => {
                    dispatch(this.action(posts.articleId));
                    dispatch(appActions.fetchSuccess());
                });
        }
    },
    action: (articleId) => {
        return {
            type: types.ADD_COMMENT,
            payload: {
                articleId
            }
        }
    }
}

// 查看评论列表
// const GET_COMMENT_LIST = 'GET_COMMENT_LIST';
export const getCommentList = {
    asyncAction: (posts) => {
        return (dispatch) => {
            dispatch(appActions.fetchStart());
            return fetch(`~~~~`)
                .then(res => res,
                    err => {
                        console.log('err', err);
                        dispatch(appActions.fetchFail());
                    }
                )
                .then(json => {
                    dispatch(this.action(posts.articleId));
                    dispatch(appActions.fetchSuccess());
                });
        }
    },
    action: (articleId) => {
        return {
            type: types.GET_COMMENT_LIST,
            payload: {
                articleId,
                data
            }
        }
    }
}