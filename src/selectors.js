export const getArticles = state => {
    return state.articles
};

export const getItem = state => {
    return state.article.article
};

export const getComments = state => {
    return state.comments.comments
};

export const loadingArticle = state => {
    return state.article.loading
};

export const loadingComments = state => {
    return state.comments.loadingComments
};