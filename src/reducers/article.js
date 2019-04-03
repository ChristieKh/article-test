import {FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAIL} from "../actionsTypes";
import {Record} from "immutable";

const ReducerRecord = Record({
    article: null,
    error: null,
    loading: true
});

export default function reducer(state = new ReducerRecord(), {type, article, error}) {
    switch (type) {
        case FETCH_ARTICLE_START:
            return state.set('loading', true);
        case FETCH_ARTICLE_SUCCESS:
            return state
                .set('loading', false)
                .set('article', article)
                .set('error', null);
        case FETCH_ARTICLE_FAIL:
            return state
                .set('loading', false)
                .set('error', error);
        default:
            return state
    }
}