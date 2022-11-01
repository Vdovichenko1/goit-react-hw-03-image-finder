import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryUl } from "./ImageGallery.styled";


export default function ImageGallery({images}) {
    return (
        <ImageGalleryUl>
          {images.map(image => (
            <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} alt={image.tags } />
			))}
        </ImageGalleryUl>
    );
}
  
  
