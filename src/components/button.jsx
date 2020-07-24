import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onRemoveTodo }) => (
  <button onClick={onRemoveTodo} type="button">
    {text}
  </button>
);
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default Button;
