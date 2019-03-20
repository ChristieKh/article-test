import {CLEAR_ITEM, FETCH_ARTICLE_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, article}) => {
    switch (type) {
        case FETCH_ARTICLE_SUCCESS:
            return article;
        case CLEAR_ITEM:
            return initialState;
        default:
            return state
    }
}