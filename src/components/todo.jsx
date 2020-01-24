import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => (
  <li
    onClick={() => onClick}
    onKeyDown={() => {}}
    role="button"
    tabIndex="0"
    style={{ textDecorationLine: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
