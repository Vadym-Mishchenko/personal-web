import ImageGallery from 'react-image-gallery';
import { galleryPhotos, useNavbarHeight } from '../../lib';
import { GalleryContainer } from './Gallery.styled';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Gallery = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <GalleryContainer
      id="gallery"
      sx={{ scrollMarginTop: `${navbarHeight}px` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <ImageGallery items={galleryPhotos} showPlayButton={true} lazyLoad />
    </GalleryContainer>
  );
};
