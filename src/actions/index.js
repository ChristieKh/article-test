import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAIL,
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAIL,
    SHOW_COMMENTS_START,
    SHOW_COMMENTS_SUCCESS,
    SHOW_COMMENTS_FAIL,
    CLEAR_ITEM
} from '../actionsTypes';
import {fetchArticlesApi, fetchArticleApi, fetchCommentsApi} from '../api/sysApi';

export const fetchArticles = () => async dispatch => {
    dispatch({type: FETCH_ARTICLES_START});

    try {
        const articles = await fetchArticlesApi();
        dispatch({
            type: FETCH_ARTICLES_SUCCESS,
            payload: articles
        })
    } catch (err) {
        dispatch({
            type: FETCH_ARTICLES_FAIL,
            payload: err,
            error: true
        })
    }
};
export const fetchArticle = (id) => async dispatch => {
    dispatch({type: FETCH_ARTICLE_START});

    try {
        const article = await fetchArticleApi(id);
        dispatch({
            type: FETCH_ARTICLE_SUCCESS,
            payload: article
        })
    } catch (err) {
        dispatch({
            type: FETCH_ARTICLE_FAIL,
            payload: err,
            error: true
        })
    }
};

export const showComments = (id) => async dispatch => {
    dispatch({type: SHOW_COMMENTS_START});

    try {
        const comments = await fetchCommentsApi(id);
        dispatch({
            type: SHOW_COMMENTS_SUCCESS,
            payload: comments
        })
    } catch (err) {
        dispatch({
            type: SHOW_COMMENTS_FAIL,
            payload: err,
            error: true
        })
    }
};

export const clearItem = () => dispatch => {
    dispatch({
        type: CLEAR_ITEM
    })
};
