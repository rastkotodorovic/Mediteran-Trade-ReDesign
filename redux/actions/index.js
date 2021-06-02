export const fetchArticles = () => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const articles = await response.json();

    dispatch({type: 'FETCH_ARTICLES', payload: articles});
}

export const fetchArticle = id => async dispatch => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await response.json();

    dispatch({type: 'FETCH_ARTICLE', payload: article});
}