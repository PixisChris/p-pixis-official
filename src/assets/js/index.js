import './_helper';

// TODO: utils.js
const toggleClassName = (el, className) => {
  document.querySelector(el).classList.toggle(className);
};

const docReady = (fn) => {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

docReady(() => {
  document.querySelector('#nav .product-btn').addEventListener('click', () => {
    toggleClassName('#nav', 'active');
  });
});
