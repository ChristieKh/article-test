import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAIL,
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAIL,
    SHOW_COMMENTS_START,
    SHOW_COMMENTS_SUCCESS,
    SHOW_COMMENTS_FAIL
} from '../actionsTypes';
import {fetchArticlesApi, fetchArticleApi, fetchCommentsApi} from '../api/sysApi';

export const fetchArticles = () => async dispatch => {
    dispatch({type: FETCH_ARTICLES_START});

    try {
        const articlesApi = await fetchArticlesApi();
        dispatch({
            type: FETCH_ARTICLES_SUCCESS,
            articles: articlesApi
        })
    } catch (err) {
        dispatch({
            type: FETCH_ARTICLES_FAIL,
            articles: err,
            error: true
        })
    }
};
export const fetchArticle = (id) => async dispatch => {
    dispatch({type: FETCH_ARTICLE_START});

    try {
        const articleApi = await fetchArticleApi(id);
        dispatch({
            type: FETCH_ARTICLE_SUCCESS,
            article: articleApi
        })
    } catch (err) {
        dispatch({
            type: FETCH_ARTICLE_FAIL,
            article: err,
            error: true
        })
    }
};

export const showComments = (id) => async dispatch => {
    dispatch({type: SHOW_COMMENTS_START});

    try {
        const commentsApi = await fetchCommentsApi(id);
        dispatch({
            type: SHOW_COMMENTS_SUCCESS,
            comments: commentsApi
        })
    } catch (err) {
        dispatch({
            type: SHOW_COMMENTS_FAIL,
            comments: err,
            error: true
        })
    }
};
