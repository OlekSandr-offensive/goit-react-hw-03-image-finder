import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ImageGallery from '../ImageGallery';

const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export class ApiService extends Component {
  state = {
    images: null,
    error: null,
    searchQuery: '',
    page: 1,
    per_page: 12,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, per_page } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      fetch(
        `${BASE_URL}/?q=${nextName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Немає картинки з іменем ${nextName}`),
          );
        })
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handlerClickImage = searchQuery => {
    return this.setState({ id: searchQuery });
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
          <ImageGallery images={images} onClick={this.handlerClickImage} />
        </>
      );
    }
  }
}

export default ApiService;
