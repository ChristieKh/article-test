import {FETCH_ARTICLES_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ARTICLES_SUCCESS:
            return payload;
        default:
            return state
    }
}