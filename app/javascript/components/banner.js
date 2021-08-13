import Typed from 'typed.js';

const loadDynamicBannerLists = () => {
  new Typed('#banner-typed-lists', {
    strings: ["Science Fiction^1000", "Comédie^1000", "Drame^1000", "Action^1000", "Thriller^1000", "Horreur^1000", "Fantasy^1000"],
    typeSpeed: 90,
    backSpeed: 90,
    showCursor: false,
    loop: true
  });
}

export { loadDynamicBannerLists };
