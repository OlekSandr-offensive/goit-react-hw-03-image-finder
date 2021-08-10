import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <>
      <button className="Button" onClick={() => onClick()}>
        Load more
      </button>
    </>
  );
};

// Button.propTypes = {};

export default Button;
