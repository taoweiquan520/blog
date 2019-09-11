import {combineReducers} from 'redux';

// articleById: GET_ARTICLE_LIST
const getArticleListById = (state, action) => {
    const {payload = {}} = action;
    const {data} = payload;
    const byId = {};

    data.list.map(item => {
        byId[item.article_id] = item;
    })
    
    return byId;
}

// articleById: getArticleDetail
const getArticleDetail = (state, action) => {
    const {payload} = action;
    const {data} = payload;

    return Object.assign({}, state, {
        [data.id]: data
    });
}

// allArticles: GET_ARTICLE_LIST
const getArticleListAllIds = (state, action) => {
    const {payload} = action;
    const {data} = payload;
    
    return data.list;
}

const articleById = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ARTICLE_LIST':
            return getArticleListById(state, action);
        case 'GET_ARTICLE_DETAIL':
            return getArticleDetail(state, action);
        case 'ADD_COMMENT':
        case 'ADD_ARTICLE':
        default:
            return state;
    }
}

const allArticles = (state = [], action) => {
    switch (action.type) {
        case 'GET_ARTICLE_LIST':
            return getArticleListAllIds(state, action);
        case 'ADD_ARTICLE':
        case 'GET_ARTICLE_DETAIL':
        case 'ADD_COMMENT':
        default:
            return state;
    }
}

const articleReducer = combineReducers({
    byId: articleById,
    allIds: allArticles
});

export default articleReducer;