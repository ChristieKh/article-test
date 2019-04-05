import {all, takeEvery} from "redux-saga/effects";
import {getArticlesSaga} from "./articlesSaga";
import {getItemSaga} from "./itemSaga";
import {showCommentsSaga} from "./commentsSaga";

export function* saga() {
    yield all([
        takeEvery('FETCH_ARTICLES_START', getArticlesSaga),
        takeEvery('FETCH_ARTICLE_START', getItemSaga),
        takeEvery('SHOW_COMMENTS_START', showCommentsSaga)
    ])
}