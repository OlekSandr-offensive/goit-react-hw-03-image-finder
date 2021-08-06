import React from 'react';
import errorImage from './Cat-cry.jpg';

const ImageError = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="Cat-cry" />
      <p>{message}</p>
    </div>
  );
};

export default ImageError;
