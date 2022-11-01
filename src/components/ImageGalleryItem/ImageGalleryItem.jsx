import { Component } from 'react';
import { ImageGalleryLi, ImageGalleryImage } from "./ImageGalleryItem.styled";
import Modal from "../Modal";
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    modal: false,
    img: null
  };

    toggleModal = e => {
    this.setState(({modal}) => ({
      modal: !modal,
      img: e
    }))
  }

  render() {
    const { largeImageURL, webformatURL, alt} = this.props;
    return (
      <>
      <ImageGalleryLi>
        <ImageGalleryImage
          src={webformatURL}
            alt={alt}
            onClick={() => {
							this.toggleModal();
						}}
        />
      </ImageGalleryLi>
      {this.state.modal && (
					<Modal img={largeImageURL} alt={alt} onClose={this.toggleModal} />
        )}
        </>
    );
  }
}


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}