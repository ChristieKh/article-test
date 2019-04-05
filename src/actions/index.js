import {FETCH_ARTICLES_START, FETCH_ARTICLE_START, SHOW_COMMENTS_START} from '../actionsTypes';


export const fetchArticles = () => {
    return {
        type: FETCH_ARTICLES_START,

    }
};

export const fetchArticle = (id) => {
    return {
        type: FETCH_ARTICLE_START,
        id
    }
};

export const showComments = (id) => {
    return {
        type: SHOW_COMMENTS_START,
        id
    }
};
