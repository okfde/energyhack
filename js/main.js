var supermarkt = new google.maps.LatLng(52.540403, 13.394625);

function initialize() {

  var day = [{
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#b4b4b4"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "weight": 0
    }, {
      "color": "#808080"
    }, {
      "visibility": "off"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#636363"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#d8e3dd"
    }]
  }, {
    "featureType": "poi.attraction",
    "stylers": [{
      "color": "#808080"
    }, {
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.sports_complex",
    "stylers": [{
      "color": "#808080"
    }, {
      "visibility": "off"
    }]
  }];

  var night = day.concat([{
    "stylers": [
      { "invert_lightness": true }
    ]
  }]);

  var styledMap = new google.maps.StyledMapType(
    day, {name: "Energy Hack Map"});

  var mapOptions = {
    zoom: 16,
    center: supermarkt,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(
    document.getElementById('map'),
    mapOptions);

  var marker = new google.maps.Marker ({
      position: supermarkt,
      title: 'SUPERMARKT - Energy Hack',
      map: map,
      icon: 'img/google_marker.png'
  });

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
