import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["You can find all Science Fiction ^1000", "You can find all Comédie ^1000", "You can find all Drame ^1000", "You can find all Action ^1000", "You can find all Thriller ^1000", "You can find all Horreur ^1000", "You can find all Fantasy ^1000"],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
  });
}

export { loadDynamicBannerText };
