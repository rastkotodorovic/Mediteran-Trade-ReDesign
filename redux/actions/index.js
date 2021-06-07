import {useRouter} from "next/router";

export const fetchArticles = page => async dispatch => {
    const response = await fetch(`http://localhost/api/articles?page=${page}`);
    const articles = await response.json();

    dispatch({type: 'FETCH_ARTICLES', payload: articles});
}


export const fetchArticle = id => async dispatch => {
    const response = await fetch(`http://localhost/api/articles/${id}`);
    const article = await response.json();

    dispatch({type: 'FETCH_ARTICLE', payload: article});
}