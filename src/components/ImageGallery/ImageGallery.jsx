import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ImageGalleryItem from '../ImageGalleryItem';

const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    id: '',
    page: 1,
    per_page: 12,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      console.log('NameImage');
      console.log('prevProps.imageInfo', prevProps.imageName);
      console.log('this.props.imageInfo', this.props.imageName);

      this.setState({ status: 'pending' });
      fetch(
        `${BASE_URL}/?q=${nextName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Немає картинки з іменем ${nextName}`),
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handlerClickImage = id => {
    this.setState({ id: id });
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть імя картинки</div>;
    }
    if (status === 'pending') {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              images={images}
              onClick={this.handlerClickImage}
            />
          </ul>
        </>
      );
    }
  }
}

export default ImageGallery;
