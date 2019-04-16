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

export const fetchDeleteApi = async (id) => {
    const response = await fetch(URL_POSTS + `/posts/${id}`, {
        method: 'DELETE'
    });
    return await response.json()
        .catch(error => error);
};

export const fetchCreateItemApi = async (title, body) => {
    const response = await fetch(URL_POSTS + `/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId: 11
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    return await response.json()
        .then(data => data)
        .catch(err => err);
};

