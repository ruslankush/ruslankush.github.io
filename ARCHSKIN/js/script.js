"use strict";

function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; 
  document.head.appendChild(script);
}

addScript('libs/jquery3.1/jquery3.1.min.js'); 
addScript('libs/slick.js/slick.min.js');
addScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhb01d-vBuKnYUsO0G20I8GXb4tw3o0Y');
addScript('js/maps.js');
addScript('js/normalize.js');
