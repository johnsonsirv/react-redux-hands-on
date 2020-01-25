import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  id, text, completed, onClick,
}) => (
  <li
    onClick={onClick}
    onKeyDown={() => {}}
    role="button"
    tabIndex="0"
    style={{ textDecorationLine: completed ? 'line-through' : 'none' }}
  >
    {`id: ${id}, text: ${text}`}
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
