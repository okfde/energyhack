function map() {
	var map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var map_attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var map = L.map('map', {scrollWheelZoom: false}).setView([52.48126, 13.35612], 17);
	L.tileLayer(map_url, {maxZoom: 18, attribution: map_attribution}).addTo(map);
	L.marker([52.481826, 13.357598]).addTo(map).bindPopup('InfraLab Berlin').openPopup();
}

function animation() {
	var currentIndex = 2;
	var element = document.getElementById('morph');
	AsciiMorph(element, {x: 0, y: 0}, function () {
		setTimeout(function () {
			AsciiMorph.morph(asciis[currentIndex]);
			currentIndex++;
			currentIndex %= asciis.length;
		}, 10000);
	});
	AsciiMorph.render(asciis[0]);
	setTimeout(function () {
		AsciiMorph.morph(asciis[1]);
	}, 4000);
}

function smoothscoll() {
// Add smooth scrolling on all links inside the navbar
	$("#navbar a").on('click', function (event) {

		$(this).blur();
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {

			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				// window.location.hash = hash;
			});

		} // End if

	});
}

$(document).ready(function () {
	smoothscoll();
	map();
	animation();
});
