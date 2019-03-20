import {CLEAR_ITEM, FETCH_ARTICLE_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ARTICLE_SUCCESS:
            return payload;
        case CLEAR_ITEM:
            return initialState;
        default:
            return state
    }
}