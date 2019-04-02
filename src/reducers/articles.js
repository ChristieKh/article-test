import { FETCH_ARTICLES_SUCCESS} from "../actionsTypes";

const initialState = {};

export default (state = initialState, {type, articles}) => {
    switch (type) {
        case FETCH_ARTICLES_SUCCESS:
            return articles;
        default:
            return state
    }
}