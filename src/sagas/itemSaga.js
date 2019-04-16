import {put, call} from "redux-saga/effects";
import {fetchArticleApi, fetchCreateItemApi, fetchDeleteApi} from "../api/sysApi";
import {
    ADD_ARTICLE_FAIL,
    ADD_ARTICLE_SUCCESS,
    DELETE_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    FETCH_ARTICLE_FAIL,
    FETCH_ARTICLE_SUCCESS
} from "../actionsTypes";

export function* getItemSaga({id}) {
    try {
        const articleApi = yield call(fetchArticleApi, id);
        yield put({type: FETCH_ARTICLE_SUCCESS, article: articleApi})
    } catch (error) {
        yield put({type: FETCH_ARTICLE_FAIL, error})
    }
}

export function* addItemSaga({email, title, body}) {
    try {
        yield call(fetchCreateItemApi, title, body);
        yield put({type: ADD_ARTICLE_SUCCESS, email, title, body})
    } catch (error) {
        yield put({type: ADD_ARTICLE_FAIL, error})
    }
}


export function* deleteItemSaga({id}) {
    try {
        yield call(fetchDeleteApi, id);
        yield put({type: DELETE_ITEM_SUCCESS, id})
    } catch (error) {
        yield put({type: DELETE_ITEM_FAIL, error})
    }
}