import './_white-paper'

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

  // screens start
  const screenNodeList = document.querySelectorAll('.screen-preview');
  const screens = Array.apply(null, screenNodeList);
  const screenContentNodeList = document.querySelectorAll('.function-wrapper');
  const screenContents = Array.apply(null, screenContentNodeList);
  const dataScreens = Array.apply(null, document.querySelectorAll('[data-screen]'));

  let screenIndex = 1;
  setInterval(() => {
    document.querySelector('.bar-body').classList.add('move');
    dataScreens.forEach(dataScreen => {
      if (dataScreen.dataset.screen == screenIndex) {
        dataScreen.classList.add('active');  
      } else {
        dataScreen.classList.remove('active');
      }
    })
    screenIndex = screenIndex + 1 > 6 ? 1 : screenIndex + 1;
  }, 5000);
  screens.forEach((screen) => {
    const screenNum = screen.dataset.screen;
    screen.addEventListener('click', () => {
      screens.forEach((s) => {
        if (s.dataset.screen === screenNum)  {
          s.classList.add('active');    
        } else {
          s.classList.remove('active');
        }
      });
      screenContents.forEach((s) => {
        if (s.dataset.screen === screenNum)  {
          s.classList.add('active');    
        } else {
          s.classList.remove('active');
        }
      });
    });
  })
  // screens end

  // scroll.js start
  if (window.innerWidth >= 768) {
    document.addEventListener('scroll', () => {
      const wH = window.innerHeight;
      const yOff = window.pageYOffset + wH;
      setHomePageWelcomeEffect(yOff, wH);
      setFnPageEffect(yOff, wH);
    });
  }
  // scroll.js end
});


const setHomePageWelcomeEffect = (yOff, wH) => {
  const scrollAnims = document.querySelectorAll('.scroll-anim');
  scrollAnims.forEach(scrollAnim => {
    const scrollPos = scrollAnim.offsetTop + wH / 2;
    if (yOff >= scrollPos) {
      scrollAnim.classList.add('scroll-anim-show')
    }
  });
};


const setFnPageEffect = (yOff, wH) => {
  const fnContainers = document.querySelectorAll('[data-scroll="fn"]');
  fnContainers.forEach((fnContainer) => {
    const layout = fnContainer.dataset.scrollLayout; // left or right
    const fnNav = fnContainer.querySelector(`.function-nav`);
    const fnMainScreen = fnContainer.querySelector('.main-screen');
    const scrollBaseline = fnContainer.querySelector('.scroll-baseline');
    const scrollEndline = fnContainer.querySelector('.scroll-endline');

    const screenStart = scrollBaseline.offsetTop + fnMainScreen.offsetHeight / 2;
    const screenMid = fnMainScreen.offsetTop + fnMainScreen.offsetHeight / 3 * 2;
    const screenEnd = fnMainScreen.offsetTop + fnMainScreen.offsetHeight;
    const pageEnd = scrollEndline.offsetTop;
    if (yOff >= screenMid) {
      const perc =
        (yOff - screenMid) / (screenEnd - screenMid) > 1
          ? 1
          : (yOff - screenMid) / (screenEnd - screenMid);
      if (yOff <= pageEnd) {
        fnNav.style.opacity = perc;
        fnNav.style.transform = `translateY(${10 - perc * 10}%)`;
      } else {
        fnNav.style.transform = `translateY(10%)`;
        fnNav.style.opacity = 0;
      }
    } else {
      fnNav.style.transform = `translateY(10%)`;
      fnNav.style.opacity = 0;
    }

    if (yOff >= screenStart) {
      const perc =
        (yOff - screenStart) / (screenEnd - screenStart) > 1
          ? 1
          : (yOff - screenStart) / (screenEnd - screenStart);
      if (yOff <= pageEnd) {
        const translateX = layout === 'left' ? `calc(${50 * perc}% - ${5 * perc}vw)` : `calc(-${50 * perc}% + ${5 * perc}vw)`
        fnMainScreen.style.transform = `scale(${1 - 0.4 * perc}) translate3d(${translateX}, calc(${
          (yOff - screenStart) / 0.6
        }px - ${0 + 83.3 * perc}%), 0)`;
      }
    }
  }); 
}

window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('loading');
  document.querySelector('#loading').classList.add('hide');
});