import {useRouter} from "next/router";

export const fetchArticles = page => async dispatch => {
    const response = await fetch(`http://localhost/api/articles?page=${page}`);
    const articles = await response.json();

    dispatch({type: 'FETCH_ARTICLES', payload: articles.data});
}


export const fetchArticle = id => async dispatch => {
    const response = await fetch(`http://localhost/api/articles/${id}`);
    const article = await response.json();

    dispatch({type: 'FETCH_ARTICLE', payload: article});
}

export const fetchPages = () => async dispatch => {
    const response = await fetch('http://localhost/api/articles?page=1');
    const pages = await response.json();

    dispatch({type: 'FETCH_PAGES', payload: pages.last_page});
}