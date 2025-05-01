import modelPhotoLight from '../assets/photos/light_hero.jpg';
import modelPhotoDark from '../assets/photos/dark_hero.jpg';
import photo1 from '../assets/photos/1.jpg';
import photo2 from '../assets/photos/2.jpg';
import photo3 from '../assets/photos/3.jpg';
import photo4 from '../assets/photos/4.jpg';
import photo5 from '../assets/photos/5.jpg';
import photo6 from '../assets/photos/6.jpg';
import photo7 from '../assets/photos/7.jpg';
import photo8 from '../assets/photos/8.jpg';
import photo9 from '../assets/photos/9.jpg';
import photo10 from '../assets/photos/10.jpg';
import photo11 from '../assets/photos/11.jpg';
import photo12 from '../assets/photos/12.jpg';
import photo13 from '../assets/photos/13.jpg';
import photo14 from '../assets/photos/14.jpg';
import photo16 from '../assets/photos/16.jpg';
import photo17 from '../assets/photos/17.jpg';
import photo18 from '../assets/photos/18.jpg';
import photo19 from '../assets/photos/19.jpg';
import photo20 from '../assets/photos/20.jpg';
import photo21 from '../assets/photos/21.jpg';

import { ReactImageGalleryItem } from 'react-image-gallery';

export interface CustomImageGalleryItem extends ReactImageGalleryItem {
  alt?: string;
}

export const heroPhotos = {
  light: modelPhotoLight,
  dark: modelPhotoDark,
};

export const sliderPhotos: CustomImageGalleryItem[] = [
  { original: photo1, alt: 'Gallery image 1' },
  { original: photo2, alt: 'Gallery image 2' },
  { original: photo3, alt: 'Gallery image 3' },
  { original: photo4, alt: 'Gallery image 4' },
  { original: photo5, alt: 'Gallery image 5' },
];

export const galleryPhotos = [
  {
    original: photo6,
    thumbnail: photo6,
  },
  {
    original: photo7,
    thumbnail: photo7,
  },
  {
    original: photo8,
    thumbnail: photo8,
  },
  {
    original: photo9,
    thumbnail: photo9,
  },
  {
    original: photo10,
    thumbnail: photo10,
  },
  {
    original: photo11,
    thumbnail: photo11,
  },
  {
    original: photo12,
    thumbnail: photo12,
  },
  {
    original: photo13,
    thumbnail: photo13,
  },
  {
    original: photo14,
    thumbnail: photo14,
  },
  {
    original: photo16,
    thumbnail: photo16,
  },
  {
    original: photo17,
    thumbnail: photo17,
  },
  {
    original: photo18,
    thumbnail: photo18,
  },
  {
    original: photo19,
    thumbnail: photo19,
  },
  {
    original: photo20,
    thumbnail: photo20,
  },
  {
    original: photo21,
    thumbnail: photo21,
  },
];
