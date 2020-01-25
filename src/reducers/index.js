import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todo';

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
