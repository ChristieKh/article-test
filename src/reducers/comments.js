import {SHOW_COMMENTS_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_COMMENTS_SUCCESS:
            return payload;
        default:
            return state
    }
}