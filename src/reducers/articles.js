import {FETCH_ARTICLES_FAIL, FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS} from "../actionsTypes";
import {Record} from "immutable";

const ReducerRecord = Record({
    articles: null,
    error: null,
    loading: true
});

export default (state = new ReducerRecord(), {type, articles, error}) => {
    switch (type) {
        case FETCH_ARTICLES_START:
            return state.set('loading', true);
        case FETCH_ARTICLES_SUCCESS:
            return state
                .set('loading', false)
                .set('articles', articles)
                .set('error', error);

        case FETCH_ARTICLES_FAIL:
            return state
                .set('loading', false)
                .set('error', true);
        default:
            return state
    }
}