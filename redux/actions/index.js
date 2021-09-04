import { toast } from "react-toastify";

export const fetchArticles = page => async dispatch => {
    const response = await fetch(`http://localhost:8084/api/articles?page=${page}`);
    const articles = await response.json();

    dispatch({type: 'FETCH_ARTICLES', payload: articles});
}


export const fetchArticle = id => async dispatch => {
    const response = await fetch(`http://localhost:8084/api/articles/${id}`);
    const article = await response.json();

    dispatch({ type: 'FETCH_ARTICLE', payload: article });
}

export const sendMail = formValues => async dispatch => {
    const name = formValues.name;
    const email = formValues.email;
    const message = formValues.message;

    toast.info('Slanje mail-a...')
    const response = await fetch(
        'http://localhost:8084/api/contact/send-mail',
        {
            body: JSON.stringify({
               name: name,
               email: email,
               message: message,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    )
    const mail = await response.json();
    toast.success('Uspjesno ste poslali mail!')

    dispatch({ type: 'SEND_MAIL', payload: mail });
}