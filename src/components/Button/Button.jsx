import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ onScrollClick }) => {
  return (
    <>
      <button className="Button" onClick={onScrollClick}>
        Load more
      </button>
    </>
  );
};

// Button.propTypes = {};

export default Button;
