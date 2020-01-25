import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => {
      const { id, text, completed } = todo;
      return (
        <Todo
          key={id}
          id={id}
          text={text}
          completed={completed}
          onClick={() => onTodoClick(id)}
        />
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
