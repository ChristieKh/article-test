import {
    ADD_ARTICLE_SUCCESS, CAN_EDIT_ITEM,
    DELETE_ITEM_SUCCESS,
    FETCH_ARTICLES_FAIL,
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS
} from "../actionsTypes";
import {Record} from "immutable";

const ReducerRecord = Record({
    articles: null,
    error: false,
    loading: true
});

export default (state = new ReducerRecord(), {type, articles, error, id, email, title, body}) => {
    //const updateItemId = state.articles.find(item => item.id);
    const idNewArticle = state.articles && state.articles.length + 1;
    const newArticle = {
        userId: email,
        id: idNewArticle,
        title,
        body
    };

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

        case ADD_ARTICLE_SUCCESS:
            return state
                .set('loading', false)
                .updateIn(['articles'], arr => arr.concat([newArticle]))
                .set('error', null);

        case CAN_EDIT_ITEM:
            return state
                .set('loading', false)
                //.update('articles', arr => arr.filter(item => item.id === id).set('update', true))
                .set('error', null);

        case DELETE_ITEM_SUCCESS:
            return state
                .set('loading', false)
                .updateIn(['articles'], arr => arr.filter(item => item.id !== id))
                .set('error', error);

        default:
            return state
    }
}