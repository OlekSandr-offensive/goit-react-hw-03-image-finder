import React, { Component } from 'react';

const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export class ApiService extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
    loadQuery: '',
    page: 1,
    per_page: 12,
  };

  componentDidMount(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log('prevProps.imageInfo', prevProps.imageName);
      console.log('this.props.imageInfo', this.props.imageName);
    }
    fetch(
      `${BASE_URL}/?q=${this.state.loadQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`,
    )
      .then(response => response.json())
      .then(id => {
        this.setState({ id });
      });
  }

  render() {
    return <div></div>;
  }
}

export default ApiService;
