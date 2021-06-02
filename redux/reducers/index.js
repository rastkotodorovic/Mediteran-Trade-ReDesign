import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer
});