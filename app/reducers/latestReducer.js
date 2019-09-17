import {combineReducers} from 'redux';

const getHotList = (state, action) => {
    const {payload = {}} = action;
    const {data} = payload;
   
    return data.list;
}

const timeLineList = (state = [], action) => {
    switch (action.type) {
        case 'GET_TIMELINE_ARTICLE_LIST':
            return state;
        case 'GET_HOT_ARTICLE_LIST':
            
        default:
            return state;
    }
}

const hotList = (state = [], action) => {
    switch (action.type) {
        case 'GET_HOT_ARTICLE_LIST':
            return getHotList(state, action);
        case 'GET_TIMELINE_ARTICLE_LIST':
        
        default:
            return state;
    }
}

const latestReducer = combineReducers({
    timeLineList,
    hotList,
});

export default latestReducer;