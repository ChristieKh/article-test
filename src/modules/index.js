import { combineReducers } from 'redux'
import articles from '../reducers/articles';
import article from '../reducers/article';
import comments from '../reducers/comments';

export default combineReducers({
    articles: articles,
    article: article,
    comments: comments
})


