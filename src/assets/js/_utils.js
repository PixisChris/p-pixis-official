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
