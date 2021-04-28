import './_white-paper'


// TODO: load html component
function loadHTML(myDivId, url) {
  var xmlhttp;
  if (window.XMLHttpRequest) 
  {
      xmlhttp = new XMLHttpRequest();
  } 
  else 
  {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function() 
  {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) 
      {
         if(xmlhttp.status == 200){
             document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
             var allScripts = document.getElementById(myDivId).getElementsByTagName('script');
             for (var n = 0; n < allScripts .length; n++)
             {
                 eval(allScripts [n].innerHTML)//run script inside div generally not a good idea but these scripts are anyways intended to be executed.
             }
         }
         else {
             alert('Error');
         }
      }
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

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
  try {
    loadHTML('#nav-wrapper', './components/_nav.html') 
  } catch (error) {
    
  }

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

  if (window.innerWidth >= 768) {
    document.addEventListener('scroll', () => {
      const wH = window.innerHeight;
      const yOff = window.pageYOffset + wH;
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
    });
  }
});


