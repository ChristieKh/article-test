import {put, call} from "redux-saga/effects";
import {fetchArticleApi} from "../api/sysApi";

export function* getItemSaga({id}) {
    try {
        const articleApi = yield call(fetchArticleApi, id);
        yield put({type: "FETCH_ARTICLE_SUCCESS", article: articleApi})
    } catch (error) {
        yield put({type: "FETCH_ARTICLE_FAIL", error})
    }
}
