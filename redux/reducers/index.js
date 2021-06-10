import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import articlesReducer from './articlesReducer';
import { reducer } from "redux-form";

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer,
    form: reducer
});