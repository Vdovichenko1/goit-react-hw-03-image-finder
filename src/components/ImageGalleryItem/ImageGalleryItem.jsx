import { Component } from 'react';
import { ImageGalleryLi, ImageGalleryImage } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  openModal = () => {
    this.setState({
      modal: true,
    });
  };
  closeModal = () => {
    this.setState({
      modal: false,
    });
  };
  render() {
    const { largeImageURL, webformatURL, alt} = this.props;
    return (
      <>
      <ImageGalleryLi>
        <ImageGalleryImage
          onClick={() => {
            this.openModal();
          }}
          src={webformatURL}
          alt={alt}
        />
      </ImageGalleryLi>
      {this.state.isShowModal && (
					<ul img={largeImageURL} alt={alt} onClose={this.closeModal} />
        )}
        </>
    );
  }
}
