import { combineReducers } from 'redux';
import feedReducer from './feed-reducer';

const reducers = combineReducers({
  feeds: feedReducer
});

export default reducers;
