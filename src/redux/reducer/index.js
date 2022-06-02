import {combineReducers} from 'redux';
import accountReducer from './account.reducer';
import newsReducer from './news.reducer';
const rootReducer = combineReducers({accountReducer, newsReducer});

export default rootReducer;
