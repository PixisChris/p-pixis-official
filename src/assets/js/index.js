import './_helper';

// TODO: utils.js
const toggleClassName = (el, className) => {
  if (document.querySelector(el)) {
    document.querySelector(el).classList.toggle(className);
  }
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
  document.querySelector('#nav .product-btn')?.addEventListener('click', () => {
    toggleClassName('#nav', 'active');
  });

  document
    .querySelector('#float-banner .close-btn')
    ?.addEventListener('click', () => {
      toggleClassName('#float-banner', 'hide');
    });

  document
    .querySelector('#nav-mobile .nav-menu-btn')
    ?.addEventListener('click', () => {
      toggleClassName('#nav-mobile', 'active');
    });

  const fnSection = document.querySelector('.function-content');
  const fnNav = document.querySelector('.function-nav');
  const fnMainScreen = document.querySelector('.main-screen');
  document.addEventListener('scroll', () => {
    const yOff = window.pageYOffset;
    const wH = window.innerHeight;
    const wW = window.innerWidth;
    const MOUNT_SCALE_END = 500;
    const start = fnSection.offsetTop + wH / 3;
    const end = fnSection.offsetTop + wH / 2;

    const screenStart = fnMainScreen.offsetTop + wH / 1.7;
    const screenMid = fnMainScreen.offsetTop + wH / 1.05;
    const screenEnd = fnMainScreen.offsetTop;
    
    // console.log('===========')
    // console.log('yOff', yOff);
    // console.log('start', screenStart);
    // console.log('end', screenEnd);
    // console.log('===========')


    if (yOff >= screenMid) {
      const perc =
        (yOff - screenMid) / (screenEnd - screenMid) <= -1
          ? -1
          : (yOff - screenMid) / (screenEnd - screenMid);
      fnNav.style.transform = `translateY(${10 + 10 * perc}%)`;
      fnNav.style.opacity = -perc;
    } else {
      fnNav.style.transform = `translateY(10%)`;
      fnNav.style.opacity = 0;
    }

    if (yOff >= screenStart) {
      const perc =
        (yOff - screenStart) / (screenEnd - screenStart) <= -1
          ? -1
          : (yOff - screenStart) / (screenEnd - screenStart);
      fnMainScreen.style.transform = `scale(${1 + 0.4 * perc}) translate3d(calc(${-50 * perc - 5 * perc}%), calc(${
        yOff - screenStart
      }px), 0)`;
    } else {
    }
  });
});
