import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLE_START,
    SHOW_COMMENTS_START,
    ADD_COMMENT,
    SHOW_MODAL_FALSE, SHOW_MODAL_TRUE, DELETE_ITEM_START, ADD_ARTICLE, CAN_EDIT_ITEM
} from '../actionsTypes';


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

export const addComment = (email, body) => {
    return {
        type: ADD_COMMENT,
        email, body
    }
};

export const doShowModal = () => {
    return {
        type: SHOW_MODAL_TRUE
    }
};

export const doNotShowModal = () => {
    return {
        type: SHOW_MODAL_FALSE
    }
};


export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM_START,
        id
    }
};

export const addArticle = (email, title, body) => {
    return {
        type: ADD_ARTICLE,
        email, title, body
    }
};

export const canEditItem = (id) => {
    return {
        type: CAN_EDIT_ITEM,
        id
    }
};
