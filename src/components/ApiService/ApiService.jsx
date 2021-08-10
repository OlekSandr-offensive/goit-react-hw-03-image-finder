import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery';
import ImageError from '../ImageError';

const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export class ApiService extends Component {
  state = {
    images: null,
    error: null,
    searchQuery: null,
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
          return Promise.reject(new Error(`No picture with name ${nextName}`));
        })
        .then(result => {
          this.setState({
            images: [...prevState.images, ...result.hits],
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handlerClickImage = id => {
    return this.setState({ searchQuery: id });
  };

  onScrollClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    console.log(this.state.page);
  };
  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter a name for the picture</div>;
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
      return <ImageError message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} onClick={this.handlerClickImage} />
          <Button onClick={this.onScrollClick} />
        </>
      );
    }
  }
}

export default ApiService;
