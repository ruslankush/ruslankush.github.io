"use strict";

function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; 
  document.head.appendChild(script);
}

addScript('libs/jquery3.1/jquery3.1.min.js'); 
addScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
addScript('libs/slick.js/slick.min.js');
addScript('js/normalize.js');
