import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
import Button from './button';

const TodoList = ({ todos, onTodoClick, onRemoveTodo }) => (
  <ul>
    {todos.map(todo => {
      const { id, text, completed } = todo;
      return (
        <span key={`span-${id}`}>
          <Todo
            key={id}
            id={id}
            text={text}
            completed={completed}
            onClick={() => onTodoClick(id)}
          />
          <Button
            key={`remove-${id}`}
            text="Delete"
            onRemoveTodo={() => onRemoveTodo(id)}
          />
        </span>
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
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
