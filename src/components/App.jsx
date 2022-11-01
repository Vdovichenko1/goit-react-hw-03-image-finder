import { Component } from 'react';
// import { AppStyle } from './App.styled';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { PixabayApi } from "./utils/GalleryApi";
import Button from "./Button";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
    error: null,
    btn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true});
      PixabayApi(query, page)
        .then(data => this.setState(prevState => {
          return {images: [...prevState.images, ...data.data.hits]}
        }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  formSubmit = (query) => {
    this.setState({ query, page: 1, images: []});
  };

  // метод загрузить еще
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const {images, error, loading} = this.state
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        {error && <h1>{error.message}</h1>}
        {loading && <Audio />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
        <ToastContainer autoClose={1000} />
      </>
    );
  }
}

