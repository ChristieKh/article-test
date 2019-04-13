import {createSelector} from "reselect";

export const getArticles = state => {
    return state.articles.articles || []
};

export const loadingArticles = state => {
    return state.articles.loading
};

export const getItem = state => {
    return state.article.article
};

export const getComments = state => {
    return state.comments.comments || []
};

export const getCountComments = createSelector(
    getComments,
    countComments => countComments.length
);


export const loadingArticle = state => {
    return state.article.loading
};

export const loadingComments = state => {
    return state.comments.loadingComments
};