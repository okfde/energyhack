/************
 * Map Code *
 ************/

var map, building, toner;

function initialize() {
  // var osmbuildings = 'http://{s}.tiles.mapbox.com/v3/osmbuildings.map-c8zdox7m/{z}/{x}/{y}.png';
  // var osmbuildings_attribution = 'Map tiles © <a href="http://mapbox.com">MapBox</a>, © <a href="http://osmbuildings.org">OSM Buildings</a>';
  var tonerlayer = 'http://a.tiles.mapbox.com/v3/gollora.map-5gvzlfvz/{z}/{x}/{y}.png';
  var toner_attribution = '<a href=\"https:\/\/www.mapbox.com\/about\/maps\/\" target=\"_blank\">&copy; Mapbox<\/a> <a href=\"http:\/\/www.openstreetmap.org\/about\/\" target=\"_blank\">&copy; OpenStreetMap<\/a> <a class=\"mapbox-improve-map\" href=\"https:\/\/www.mapbox.com\/map-feedback\/\" target=\"_blank\">Improve this map<\/a>';
  // var osmdefault = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  // var osmdefault_attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

  // building = L.tileLayer(osmbuildings, {styleId: 3, attribution: osmbuildings_attribution});
      // defualt  = L.tileLayer(osmdefault, {styleId: 2,   attribution: osmdefault_attribution}),
  toner = L.tileLayer(tonerlayer, {styleId: 1, attribution: toner_attribution});

  map = L.map('map', {
    scrollWheelZoom: false
  }).setView([52.50011, 13.39147], 17);

  // var baseMaps = {
  //     "Schwarz & Weiß": toner,
  //     "OSM Buldings": building,
  //     "OSM Standard": defualt
  // };

  // if (getActiveStyleSheet() === 'day') {
  //   map.addLayer(building);
  // } else {
  map.addLayer(toner);
  // }


  // L.control.layers(baseMaps, null).addTo(map);

  L.marker([52.50011, 13.39147]).addTo(map)
           .bindPopup('Impact Hub Berlin')
           .openPopup();
}

/**********************************
 * Custom StyleSheetSwitcher Code *
 **********************************/

var dayCSS = 'day';
var nightCSS = 'night';

function switchStyleSheet() {
  if (title == dayCSS){
    title = nightCSS;
  } else {
    title = dayCSS;
  }

  /* Preventing styleswitch: Uncaught TypeError: Cannot read property '_leaflet_id' of undefined
  if (title === 'day') {
    map.removeLayer(toner);
    map.addLayer(building);
  } else {
    map.removeLayer(building);
    map.addLayer(toner);
  }
  */

  setActiveStyleSheet(title);
}

/***************
 * FadeIn Code *
 ***************/

$(document).ready(function(){
    $("#readmore").click(function(e){
        e.preventDefault();
        $("#more").fadeToggle();
        $("#readmore").addClass("js-hidden");
    });
});
