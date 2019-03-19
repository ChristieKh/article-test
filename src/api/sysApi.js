const URL_POSTS = `https://jsonplaceholder.typicode.com`;

export const fetchArticlesApi = async () => {
    const response = await fetch(URL_POSTS + `/posts`);
    return await response.json()
        .then(data => data)
        .catch(err => err);
};

export const fetchArticleApi = async (id) => {
    const response = await fetch(URL_POSTS + `/posts/${id}`);
    return await response.json()
        .then(data => data)
        .catch(err => err);
};

export const fetchCommentsApi = async (id) => {
    const response = await fetch(URL_POSTS + `/comments?postId=${id}`);
    return await response.json()
        .then(data => data)
        .catch(err => err);
};


