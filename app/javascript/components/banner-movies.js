import Typed from 'typed.js';

const loadDynamicBannerMovies = () => {
const movies = document.querySelectorAll('.movie');
const array = [];
for (const movie of movies) {
  array.push(movie.dataset.title);
}
  new Typed('#banner-typed-movies', {
    strings: array,
    typeSpeed: 90,
    backSpeed: 90,
    showCursor: false,
    loop: true
  });
}

export { loadDynamicBannerMovies };
