import React, { Component } from 'react';

const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export class ApiService extends Component {
  state = {
    imageName: '',
    image: null,
    loading: false,
    id: '',
    page: 1,
    per_page: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      console.log('NameImage');
      console.log('prevProps.imageInfo', prevProps.imageName);
      console.log('this.props.imageInfo', this.props.imageName);

      this.setState({ loading: true });
      fetch(
        `${BASE_URL}/?q=${nextName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`,
      )
        .then(response => response.json())
        .then(image => this.setState({ image }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  // componentDidMount(prevProps, prevState) {
  //   if (prevProps.imageName !== this.props.imageName) {
  //     console.log('prevProps.imageInfo', prevProps.imageName);
  //     console.log('this.props.imageInfo', this.props.imageName);
  //   }
  //   fetch(
  //     `${BASE_URL}/?q=${this.state.loadQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`,
  //   )
  //     .then(response => response.json())
  //     .then(id => {
  //       this.setState({ id });
  //     });
  // }

  render() {
    const { loading, image } = this.state;
    const { imageName } = this.props.imageName;

    return (
      <div>
        {loading && <div>Грузиться...</div>}
        {!imageName && <div>Введіть імя картинки</div>}
        {image && <div>{image.name}</div>}
      </div>
    );
  }
}

export default ApiService;
