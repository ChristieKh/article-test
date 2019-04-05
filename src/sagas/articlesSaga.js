import {put} from "redux-saga/effects"
import {fetchArticlesApi} from "../api/sysApi";

export function* getArticlesSaga() {
    try {
        const articlesApi = yield fetchArticlesApi();
        yield put({type: "FETCH_ARTICLES_SUCCESS", articles: articlesApi})
    } catch (error) {
        yield put({type: "FETCH_ARTICLES_FAIL", error})
    }

}
