import './_i18n';
import './_white-paper';
import './_contact';
import ScrollToAnchor from './scrolltoanchor.esm.js'
import { docReady, toggleClassName, loadHTMLById, animate } from './_utils';
var smoothScroll = new ScrollToAnchor({
  offset: 200
});

window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('loading');
  document.querySelector('#loading').classList.add('hide');
});

docReady(() => {
  loadHTMLById('nav-components', 'nav.html');
  loadHTMLById('footer-components', 'footer.html');

  document
    .querySelector('#float-banner .close-btn')
    ?.addEventListener('click', () => {
      toggleClassName('#float-banner', 'hide');
    });

  setHomePageScreensEffect();

  const scrollHandler = () => {
    const wH = window.innerHeight;
    const yOff = window.pageYOffset + wH;
    setHomePageWelcomeEffect(yOff, wH);
    window.innerWidth >= 768 && setFnPageEffect(yOff, wH);
  };

  // scroll.js start
  document.addEventListener('scroll', () => {
    window.requestAnimationFrame(scrollHandler);
  });
  // scroll.js end

  // functions
  if (document.body.id === 'function-page') {
    // 左上角小選單
    document
      .querySelector('.function-select')
      ?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleClassName('header .function-options', 'active');
      });
    document.body.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('function-options') &&
        document
          .querySelector('header .function-options')
          .classList.contains('active')
      ) {
        document
          .querySelector('header .function-options')
          .classList.remove('active');
      }
    });
  }
});

const setHomePageScreensEffect = () => {
  // screens start
  const screenNodeList = document.querySelectorAll('.screen-preview');
  const screens = Array.apply(null, screenNodeList);
  const screenContentNodeList = document.querySelectorAll('.function-wrapper');
  const screenContents = Array.apply(null, screenContentNodeList);
  const dataScreens = Array.apply(
    null,
    document.querySelectorAll('[data-screen]')
  );

  let screenIndex = 1;
  setInterval(() => {
    document.querySelector('.bar-body')?.classList.add('move');
    dataScreens.forEach((dataScreen) => {
      if (dataScreen.dataset.screen == screenIndex) {
        dataScreen?.classList.add('active');
      } else {
        dataScreen?.classList.remove('active');
      }
    });
    screenIndex = screenIndex + 1 > 6 ? 1 : screenIndex + 1;
  }, 5000);
  screens.forEach((screen) => {
    const screenNum = screen.dataset.screen;
    screen.addEventListener('click', () => {
      screens.forEach((s) => {
        if (s.dataset.screen === screenNum) {
          s?.classList.add('active');
        } else {
          s?.classList.remove('active');
        }
      });
      screenContents.forEach((s) => {
        if (s.dataset.screen === screenNum) {
          s?.classList.add('active');
        } else {
          s?.classList.remove('active');
        }
      });
    });
  });
  // screens end
};

const setHomePageWelcomeEffect = (yOff, wH) => {
  const scrollAnims = document.querySelectorAll('.scroll-anim');
  scrollAnims.forEach((scrollAnim) => {
    const scrollPos = scrollAnim.offsetTop + wH / 2;
    if (yOff >= scrollPos) {
      scrollAnim?.classList.add('scroll-anim-show');
      scrollAnim?.classList.add('scroll-anim-delay');
      setTimeout(() => {
        scrollAnim?.classList.remove('scroll-anim-delay');
      }, 1000);
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
    const fnContent = fnContainer.querySelector('.function-content'); // 功能頁文字區塊

    const screenStart =
      scrollBaseline.offsetTop + fnMainScreen.offsetHeight / 2;
    const screenMid =
      fnMainScreen.offsetTop + (fnMainScreen.offsetHeight / 3) * 2;
    const screenEnd = fnMainScreen.offsetTop + fnMainScreen.offsetHeight;
    const pageEnd = scrollEndline.offsetTop;
    if (yOff >= screenMid) {
      const perc =
        (yOff - screenMid) / (screenEnd - screenMid) > 1
          ? 1
          : (yOff - screenMid) / (screenEnd - screenMid);
      if (yOff <= pageEnd + 500) {
        fnNav.style.opacity = perc;
        fnNav.style.transform = `translateY(${10 - perc * 10}%)`;
        fnNav.style.pointerEvents = 'visible';
      } else {
        fnNav.style.transform = `translateY(10%)`;
        fnNav.style.opacity = 0;
        fnNav.style.pointerEvents = 'none';
      }
    } else {
      fnNav.style.transform = `translateY(10%)`;
      fnNav.style.opacity = 0;
      fnNav.style.pointerEvents = 'none';
    }

    if (yOff >= screenStart) {
      const perc =
        (yOff - screenStart) / (screenEnd - screenStart) > 1
          ? 1
          : (yOff - screenStart) / (screenEnd - screenStart);
      // console.log( (yOff - screenStart) / (screenEnd - screenStart) )
      if (yOff <= pageEnd) {
        const translateX =
          layout === 'left'
            ? `${
                50 * perc * window.innerWidth * 0.01 -
                5 * perc * window.innerWidth * 0.01
              }`
            : `${
                -50 * perc * window.innerWidth * 0.01 +
                5 * perc * window.innerWidth * 0.01
              }`;
        var scaleValue = 1 - 0.4 * perc;
        // 因為 sticky 的更動不完全可配合原算法，因此當功能頁文字區塊出現在瀏覽畫面內時，就將 scale transition 至 0.6
        if (fnContent.getBoundingClientRect().top < window.innerHeight) {
          scaleValue = 0.6;
        }

        fnMainScreen.style.transform = `scale(${scaleValue}) translate3d(${
          Math.floor(translateX * 10 * 0.83) / 10
        }px, 0, 0)`;

        // 將影片改為 sticky 固定，不使用 translateY 持續計算
        fnMainScreen.style.position = 'sticky';
        fnMainScreen.style.top = '200px';
        fnMainScreen.style.marginBottom = '0px';
        fnMainScreen.style.right = '0px';
        fnMainScreen.style.transition = 'transform .2s';
      }
    }

    // fn-nav-item
    const fnNavItems = fnContainer.querySelectorAll('.function-list .item');
    fnNavItems.forEach((fnNavItem) => {
      const anchor = fnNavItem.dataset.scroll;
      const itemContent = fnContainer.querySelector(
        `.item[data-scroll="${anchor}"]`
      );
      const itemContentHight = itemContent.offsetHeight;
      const positionStart = itemContent.offsetTop + wH - 230;
      const positionEnd = positionStart + itemContentHight;
      if (yOff >= positionStart && yOff <= positionEnd) {
        fnNavItem.classList.add('active');
      } else {
        fnNavItem.classList.remove('active');
      }
    });
  });
};
// END
