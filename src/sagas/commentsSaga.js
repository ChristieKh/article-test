import {put, call} from "redux-saga/effects";
import {fetchCommentsApi} from "../api/sysApi";

export function* showCommentsSaga({id}) {
    try {
        const commentsApi = yield call(fetchCommentsApi, id);
        yield put({type: "SHOW_COMMENTS_SUCCESS", comments: commentsApi})
    } catch (error) {
        yield put({type: "SHOW_COMMENTS_FAIL", error})
    }

}

export function* addCommentsSaga({email, body}) {
    try {
        yield put({type: "ADD_COMMENT_SUCCESS", email, body})
    } catch (error) {
        yield put({type: "ADD_COMMENT_FAIL", error})
    }
}
