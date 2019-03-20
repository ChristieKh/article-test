import {CLEAR_ITEM, SHOW_COMMENTS_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, comments}) => {
    switch (type) {
        case SHOW_COMMENTS_SUCCESS:
            return comments;
        case CLEAR_ITEM:
            return initialState;
        default:
            return state
    }
}