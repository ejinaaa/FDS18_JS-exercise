// DOM
const $carouselSlides = document.createElement('div');
const $prevBtn = document.createElement('button');
const $nextBtn = document.createElement('button');

// functions
const render = ($container, images) => {
  const $fragment = document.createDocumentFragment();
  const $firstImg = document.createElement('img');
  const $lastImg = document.createElement('img');
  
  $carouselSlides.classList.add('carousel-slides');
  $prevBtn.classList.add('carousel-control', 'prev');
  $nextBtn.classList.add('carousel-control', 'next');

  $firstImg.src = images[0];
  $lastImg.src = images[images.length - 1];

  $prevBtn.innerHTML = '&laquo';
  $nextBtn.innerHTML = '&raquo';

  images.forEach(url => {
    const $img = document.createElement('img');
    $img.src = url;
    $fragment.appendChild($img);
  });
  
  $fragment.appendChild($firstImg);
  $fragment.insertBefore($lastImg, $fragment.firstElementChild);
  $carouselSlides.appendChild($fragment);
  $container.appendChild($carouselSlides);
  $container.appendChild($prevBtn);
  $container.appendChild($nextBtn);

  window.addEventListener('load', () => {
    $container.style.width = `${$carouselSlides.firstElementChild.clientWidth}px`;
    $container.style.opacity = 1;
  });
};

const carousel = ($container, images) => {
  const IMG_LENGTH = images.length;
  const DURATION = 500;
  let currentIndex = 0;
  let autoPlayTimerId = null;

  const slideSetProperty = (currentIndex, duration) => {
    $carouselSlides.style.setProperty('--currentSlide', currentIndex + 1);
    $carouselSlides.style.setProperty('--duration', duration);
  };

  const backToFirstImg = () => {
    setTimeout(() => {
      currentIndex = 0;
      slideSetProperty(currentIndex, 0);
    }, DURATION);
  };
  
  const backToLastImg = () => {
    setTimeout(() => {
      currentIndex = IMG_LENGTH - 1;
      slideSetProperty(currentIndex, 0);
    }, DURATION);
  };

  const autoPlaySlide = () => {
    if (currentIndex < IMG_LENGTH) {
      currentIndex++;
      slideSetProperty(currentIndex, DURATION);
    }
    if (currentIndex === IMG_LENGTH) {
      backToFirstImg();
    }
  };
  
  const showPrevImg = () => {
    clearInterval(autoPlayTimerId);
    autoPlayTimerId = null;

    if (currentIndex >= 0) {
      currentIndex--;
      slideSetProperty(currentIndex, DURATION);
    }
    if (currentIndex === -1) {
      backToLastImg();
    }

    slide();
  };

  const showNextImg = () => {
    clearInterval(autoPlayTimerId);
    autoPlayTimerId = null;

    autoPlaySlide();
    slide();
  };

  const slide = () => {
    if (autoPlayTimerId) return;
    autoPlayTimerId = setInterval(autoPlaySlide, 2000);
  };

  render($container, images);
  slide();

  $carouselSlides.style.setProperty('--currentSlide', currentIndex + 1);

  $prevBtn.addEventListener('click', _.throttle(showPrevImg, 500));
  $nextBtn.addEventListener('click', _.throttle(showNextImg, 500));
};

document.addEventListener('DOMContentLoaded', carousel(document.querySelector('.carousel'), [
  'assets/movies/movie-1.jpg',
  'assets/movies/movie-2.jpg',
  'assets/movies/movie-3.jpg',
  'assets/movies/movie-4.jpg'
]));