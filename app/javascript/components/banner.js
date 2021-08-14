import Typed from 'typed.js';

const loadDynamicBannerLists = () => {
  const lists = document.querySelectorAll('.lists');
  const array = [];
  for (const list of lists) {
    array.push(list.dataset.list);
  }
  new Typed('#banner-typed-lists', {
    strings: array,
    typeSpeed: 90,
    backSpeed: 90,
    showCursor: false,
    loop: true
  });
}

export {
  loadDynamicBannerLists
};
