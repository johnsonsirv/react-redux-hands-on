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

export const addTodo = text => ({
  type: ADD_TODO,
  id: Math.ceil(Math.random() * 100),
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
