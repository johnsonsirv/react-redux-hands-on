import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todo';

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
});

export default rootReducer;
