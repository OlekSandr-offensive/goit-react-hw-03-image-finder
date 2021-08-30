import React from 'react';

const ImageGalleryItem = ({ image, largeImg }) => {
  const { webformatURL, tags } = image;
  return (
    <li onClick={largeImg} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
