import { combineReducers } from 'redux';

// commentById: getCommentListById
const getCommentListById = (state, action) => {
    const {payload} = action;
    const {articleId, data} = payload;
    const byId = {};

    data.map(item => {
        byId[item.id] = item;
    });

    return Object.assign({}, state, byId);
}

// allComments: getCommentListAllIds
const getCommentListAllIds = (state, action) => {
    const {payload} = action;
    const {data} = payload;

    return data.map(item => item.id);
}

const commentById = (state = {}, action) => {
    switch (action.type) {
        case 'GET_COMMENT_LIST':
            return getCommentListById(state, action);
        case 'ADD_COMMENT':
        default:
            return state;
    }
}

const allComments = (state = [], action) => {
    switch (action.type) {
        case 'GET_COMMENT_LIST':
            return getCommentListAllIds(state, action);
        case 'ADD_COMMENT':
        default:
            return state;
    }
}

const commentReducer = combineReducers({
    byId: commentById,
    allIds: allComments
});

export default commentReducer;