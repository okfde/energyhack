/************
 * Map Code *
 ************/

var map, building, toner;

function initialize() {
  var osmbuildings = 'http://{s}.tiles.mapbox.com/v3/osmbuildings.map-c8zdox7m/{z}/{x}/{y}.png';
  var osmbuildings_attribution = 'Map tiles © <a href="http://mapbox.com">MapBox</a>, © <a href="http://osmbuildings.org">OSM Buildings</a>';
  var tonerlayer = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png';
  var toner_attribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.';
  // var osmdefault = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  // var osmdefault_attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

  building = L.tileLayer(osmbuildings, {styleId: 3, attribution: osmbuildings_attribution});
      // defualt  = L.tileLayer(osmdefault, {styleId: 2,   attribution: osmdefault_attribution}),
  toner = L.tileLayer(tonerlayer, {styleId: 1, attribution: toner_attribution});

  map = L.map('map').setView([52.540403, 13.394625], 17);

  // var baseMaps = {
  //     "Schwarz & Weiß": toner,
  //     "OSM Buldings": building,
  //     "OSM Standard": defualt
  // };

  if (getActiveStyleSheet() === 'day') {
    map.addLayer(building);
  } else {
    map.addLayer(toner);
  }


  // L.control.layers(baseMaps, null).addTo(map);

  L.marker([52.540403, 13.394625]).addTo(map)
           .bindPopup('Supermarkt Berlin.')
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
  if (title === 'day') {
    map.removeLayer(toner);
    map.addLayer(building);
  } else {
    map.removeLayer(building);
    map.addLayer(toner);
  }
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
