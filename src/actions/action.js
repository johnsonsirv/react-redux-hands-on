export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const REMOVE_TODO = 'REMOVE_TODO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId + 1,
  text,
});

export const deleteTodo = index => ({
  type: REMOVE_TODO,
  index,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
