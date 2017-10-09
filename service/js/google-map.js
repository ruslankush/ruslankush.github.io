// var marker;
function initMap() {
    // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var map = new google.maps.Map(
        document.getElementById('map'), 
        {
            zoom: 16,
            center: { lat: 0, lng: 0 }, 
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#193341"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c5a71"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#29768a"
                        },
                        {
                            "lightness": -37
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#406d80"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#406d80"
                        }
                    ]
                },
                {
                "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#3e606f"
                        },
                        {
                            "weight": 2
                        },
                        {
                            "gamma": 0.84
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "weight": 0.6
                        },
                        {
                            "color": "#1a3541"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2c5a71"
                        }
                    ]
                }
            ],
        }
    );
}
//     var geocoder = new google.maps.Geocoder();

//     $(document).ready(function(){
//         marker  = new google.maps.Marker({
//             position: { lat: 0, lng: 0 }
//         });
//         getPointAddress(geocoder, map);
//     });

//     var rtime;
//     var timeout = false;
//     var delta = 200;

//     $(document).ready(function(){
//         $(window).resize(function(){
//             rtime = new Date();
//             if (timeout === false) {
//                 timeout = true;
//                 setTimeout(resizeend, delta);
//             }
//         });
//     });

//     function resizeend() {
//         if (new Date() - rtime < delta) {
//             setTimeout(resizeend, delta);
//         } else {
//             timeout = false;
//             console.log('Done resizing');
//             map_resizer(geocoder,map);
//         }               
//     }
// }

// function map_recenter(map, latlng, offsetx, offsety) {
//     var point1 = map.getProjection().fromLatLngToPoint(
//         (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
//     );
//     var point2 = new google.maps.Point(
//         ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
//         ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
//     );  
//     map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
//         point1.x - point2.x,
//         point1.y + point2.y
//     )));
// }


var marker;/* = new google.maps.Marker({
    position: { lat: 0, lng: 0 }
});*/


// var image_marker_big = "";

// function geocodeAddress(geocoder, resultsMap, marker_big, address) {
//     image_marker_big = marker_big;
//     resize_map(geocoder, resultsMap, address);
// }

// function set_marker(map, position, custom_marker_image) {
//     marker.setMap(null);
//     if (custom_marker_image != false) {
//         marker = new google.maps.Marker({
//             position: position,
//             icon: image_marker_big,
//             animation: google.maps.Animation.DROP
//         });
//     }
//     else{
//         marker = new google.maps.Marker({
//             position: position,
//             animation: google.maps.Animation.DROP
//         });
//     }
//     marker.setMap(map);
// }

// function resize_map(geocoder, resultsMap, address, offsetx ,offsety) {
//     var offsetx = -400;
//     var offsety = 0;
//     var x = offsetx ,y = offsety;
//     var custom_marker = true;
//     if($("body").width() < 999 && $("body").width() >= 930){
//         x = 140;
//     }
//     if($("body").width() < 930 && $("body").width() >= 820){
//         x = 105;
//     }
//     if($("body").width() < 820 && $("body").width() >= 768){
//         x = 70;
//     }
//     if($("body").width() < 768 && $("body").width() >= 0){
//         x = 0;
//         custom_marker = false;
//     }

//     geocoder.geocode({'address': address}, function(results, status) {
//         if (status === google.maps.GeocoderStatus.OK) {
//             resultsMap.setCenter(results[0].geometry.location);
//             set_marker(resultsMap,results[0].geometry.location,custom_marker);
//             map_recenter(resultsMap, results[0].geometry.location, x, y);
//         } else {
//           console.log('Ошибка геопозиции при смещении: ' + status);
//         }
//     });
// }