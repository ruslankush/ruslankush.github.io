function initialize() {
    var isDraggable = $(document).width() > 768 ? true : false;
    var myOptions = {
        zoom: 17,
        center: new google.maps.LatLng(55.7935437, 49.1157908),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        streetViewControl: false,
        panControl: false,
        mapTypeControl: false,
        draggable: isDraggable,
        // styles: [{featureType: 'all', elementType: 'all', stylers: [{saturation:-100},{gamma:0}]}]
        
        styles: 
        [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#dde6e8"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({
        icon: 'img/shou-rum.png',
        map: map,
        position: new google.maps.LatLng(55.7935437, 49.1157908)
    });
}
google.maps.event.addDomListener(window, 'load', initialize); 


function initialize() {
    var isDraggable = $(document).width() > 768 ? true : false;
    var myOptions = {
        zoom: 17,
        center: new google.maps.LatLng(55.745149, 49.1002401),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        streetViewControl: false,
        panControl: false,
        mapTypeControl: false,
        draggable: isDraggable,
        // styles: [{featureType: 'all', elementType: 'all', stylers: [{saturation:-100},{gamma:0}]}]
        
        styles: 
        [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#dde6e8"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map-point'), myOptions);
    marker = new google.maps.Marker({
        icon: 'img/icon/maps-point_icon.svg',
        map: map,
        position: new google.maps.LatLng(55.745149, 49.1002401)
    });
}
google.maps.event.addDomListener(window, 'load', initialize); 