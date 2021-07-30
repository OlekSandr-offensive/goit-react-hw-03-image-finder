import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, handlerClickImage } = this.props;

    return (
      <>
        <ul className="ImageGallery">
          {images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                images={image}
                onClick={handlerClickImage}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
