import ImageGallery from 'react-image-gallery';
import { CustomImageGalleryItem, sliderPhotos, useNavbarHeight } from '../../lib';
import { ParalaxContainer } from './Parallax.styled';

export const Parallax = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <ParalaxContainer sx={{ top: `${navbarHeight}px`, marginTop: `${navbarHeight}px` }}>
      <ImageGallery
        items={sliderPhotos}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        showFullscreenButton={false}
        autoPlay
        showBullets={false}
        slideDuration={800}
        slideInterval={5000}
        disableSwipe
        lazyLoad
        renderItem={(item: CustomImageGalleryItem) => (
          <div className="image-gallery-image">
            <div
              style={{
                maxHeight: '600px',
                width: '100vw',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.original}
                alt={`Image of ${item.alt}`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  width: '100%',
                  height: '600px',
                }}
              />
            </div>
          </div>
        )}
      />
    </ParalaxContainer>
  );
};
