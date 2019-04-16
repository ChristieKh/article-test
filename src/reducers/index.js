import { combineReducers } from 'redux'
import articles from './articles';
import article from './article';
import comments from './comments';
import showModal from "./modal";

export default combineReducers({
    articles,
    article,
    comments,
    showModal
})


