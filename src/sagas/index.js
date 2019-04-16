import {all, takeEvery} from "redux-saga/effects";
import {getArticlesSaga} from "./articlesSaga";
import {addItemSaga, deleteItemSaga, getItemSaga} from "./itemSaga";
import {addCommentsSaga, showCommentsSaga} from "./commentsSaga";
import {
    ADD_ARTICLE,
    ADD_COMMENT,
    DELETE_ITEM_START,
    FETCH_ARTICLE_START,
    FETCH_ARTICLES_START,
    SHOW_COMMENTS_START
} from "../actionsTypes";

export function* saga() {
    yield all([
        takeEvery(FETCH_ARTICLES_START, getArticlesSaga),
        takeEvery(FETCH_ARTICLE_START, getItemSaga),
        takeEvery(SHOW_COMMENTS_START, showCommentsSaga),
        takeEvery(ADD_COMMENT, addCommentsSaga),
        takeEvery(DELETE_ITEM_START, deleteItemSaga),
        takeEvery(ADD_ARTICLE, addItemSaga)
    ])
}