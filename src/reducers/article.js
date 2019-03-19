import {FETCH_ARTICLE_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ARTICLE_SUCCESS:
            return payload;
        default:
            return state
    }
}