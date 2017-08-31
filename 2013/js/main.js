/************
 * Map Code *
 ************/

var map, toner;

function initialize() {
	var osmbuildings = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmdefault_attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors';
	toner = L.tileLayer(osmbuildings, {styleId: 1, attribution: osmdefault_attribution});

	map = L.map('map').setView([52.540403, 13.394625], 17);

	map.addLayer(toner);

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
	if (title == dayCSS) {
		title = nightCSS;
	} else {
		title = dayCSS;
	}
	setActiveStyleSheet(title);
}

/***************
 * FadeIn Code *
 ***************/

$(document).ready(function () {
	$("#readmore").click(function (e) {
		e.preventDefault();
		$("#more").fadeToggle();
		$("#readmore").addClass("js-hidden");
	});
});
