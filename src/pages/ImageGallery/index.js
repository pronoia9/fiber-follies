import { ImageGallery } from './ImageGallery';
import { Frames } from './components/Frames';
import { Frame } from './components/Frame';

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    // url: pexel(1103970),
    url: '/src/pages/ImageGallery/assets/1.jpg',
  },
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    // url: pexel(416430),
    url: '/src/pages/ImageGallery/assets/2.jpg',
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    // url: pexel(310452),
    url: '/src/pages/ImageGallery/assets/3.jpg',
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    // url: pexel(327482),
    url: '/src/pages/ImageGallery/assets/4.jpg',
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    // url: pexel(325185),
    url: '/src/pages/ImageGallery/assets/5.jpg',
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    // url: pexel(358574),
    url: '/src/pages/ImageGallery/assets/6.jpg',
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    // url: pexel(227675),
    url: '/src/pages/ImageGallery/assets/7.jpg',
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    // url: pexel(911738),
    url: '/src/pages/ImageGallery/assets/8.jpg',
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    // url: pexel(1738986),
    url: '/src/pages/ImageGallery/assets/9.jpg',
  },
];

const GOLDENRATIO = 1.61803398875;

export { ImageGallery, Frames, Frame, pexel, images, GOLDENRATIO };
