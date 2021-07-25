import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem />
        </ul>
      </>
    );
  }
}

export default ImageGallery;
