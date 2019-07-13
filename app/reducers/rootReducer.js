// state 状态树
var state = {
        app: {
            isFetching: false,
            error: ""
        },
        // 文章
        articles: {
            byId: {
                "article1": {
                    id: "article1",
                    title: 'Title 1',
                    author: "user1",
                    type: 'CSS',
                    comments: ["comment1", "comment2"]
                },
                "article2": {
                    id: "article2",
                    title: 'Title 2',
                    author: "user2",
                    type: 'Javascript',
                    comments: ["comment3", "comment4", "comment5"]
                }
            },
            allIds: ["article1", "article2"]
        },
        // 作者
        users: {
            byId: {
                "user1": {
                    id: 'user1',
                    username: "user1",
                    name: "User 1",
                    articles: ["article1"],
                    type: 1
                },
                "user2": {
                    id: 'user1',
                    username: "user2",
                    name: "User 2",
                    articles: ["article2"],
                    type: 1
                },
                "user3": {
                    id: 'user1',
                    username: "user3",
                    name: "User 3",
                    articles: ["article3"],
                    type: 1
                }
            },
            allIds: ["user1", "user2","user3"]
        },
        // 评论
        comments: {
            byId: {
                "comment1": {
                    id: "comment1",
                    commentText: "It's comment one!",
                    user: "user3"
                },
                "comment2": {
                    id: "comment2",
                    commentText: "It's comment two!",
                    user: "user1"
                }
            },
            allIds: ["comment1", "comment2"]
        },
        // lastest 文章
        latest: {
            timeLine: [{date: "2018-04", num: 5}, {date: "2018-05", num: 10}],
            categories: [{category: "CSS", num: 3}, {category: "JAVASCRIPT", num: 4}, {category: "杂谈", num: 5}],
            hot: ["article1"],
            new: ["article2"],
            newComments: ["comment2", "comment1"]
        }
    }

import {combineReducers} from 'redux';
import appReducer from './appReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';


const rootReducer = combineReducers({
    appReducer,
    articleReducer,
    commentReducer
});

export default rootReducer;