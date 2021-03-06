import {
    ADD_COMMENT_SUCCESS,
    SHOW_COMMENTS_FAIL,
    SHOW_COMMENTS_START,
    SHOW_COMMENTS_SUCCESS
} from "../actionsTypes";
import {Record} from "immutable";

const ReducerRecord = Record({
    comments: null,
    error: null,
    loadingComments: true
});

export default function reducer(state = new ReducerRecord(), {type, comments, error, email, body}) {
    const id = state.comments && state.comments.length + 1;
    const postId = state.comments && state.comments[0].postId;
    const newComment = {postId, id, name: body, email, body};
    switch (type) {
        case SHOW_COMMENTS_START:
            return state.set('loadingComments', true);
        case SHOW_COMMENTS_SUCCESS:
            return state
                .set('loadingComments', false)
                .set('comments', comments)
                .set('error', null);
        case SHOW_COMMENTS_FAIL:
            return state
                .set('loadingComments', false)
                .set('error', error);

        case ADD_COMMENT_SUCCESS:
            return state
                .set('loadingComments', false)
                .updateIn(['comments'], arr => arr.concat([newComment]))
                .set('error', null);

        default:
            return state
    }
}
