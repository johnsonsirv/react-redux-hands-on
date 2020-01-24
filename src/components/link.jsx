import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <button
      type="button"
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
