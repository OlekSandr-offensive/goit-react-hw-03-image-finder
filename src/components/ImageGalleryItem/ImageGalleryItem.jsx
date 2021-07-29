import React from 'react';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id} onClick={() => onClick(id)} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
