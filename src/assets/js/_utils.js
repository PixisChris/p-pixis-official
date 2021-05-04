export const toggleClassName = (el, className) => {
  if (document.querySelector(el)) {
    document.querySelector(el).classList.toggle(className);
  }
};

export const docReady = (fn) => {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

export const loadHTMLById = (myDivId, url) => {
  let xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
        var allScripts = document
          .getElementById(myDivId)
          .getElementsByTagName('script');
        for (var n = 0; n < allScripts.length; n++) {
          eval(allScripts[n].innerHTML);
        }
      }
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
};

export const animateToAnchor = (elem, style, unit, from, to, time, prop) => {
  if (!elem) {
      return;
  }
  var start = new Date().getTime(),
      timer = setInterval(function () {
          var step = Math.min(1, (new Date().getTime() - start) / time);
          if (prop) {
              elem[style] = (from + step * (to - from))+unit;
          } else {
              elem.style[style] = (from + step * (to - from))+unit;
          }
          if (step === 1) {
              clearInterval(timer);
          }
      }, 25);
  if (prop) {
        elem[style] = from+unit;
  } else {
        elem.style[style] = from+unit;
  }
}