import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import articlesReducer from './articlesReducer';
import pagesReducer from "./pagesReducer";

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer,
    pages: pagesReducer
});