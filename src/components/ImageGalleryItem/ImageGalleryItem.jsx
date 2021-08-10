import React from 'react';

const ImageGalleryItem = ({ images, onClick }) => {
  const { id, webformatURL, tags } = images;
  return (
    <li onClick={() => onClick(id)} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
