function map() {
	var map_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var map_attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var map = L.map('map', {scrollWheelZoom: false}).setView([52.482777, 13.367506], 17);
	L.tileLayer(map_url, {maxZoom: 18, attribution: map_attribution}).addTo(map);
	L.marker([52.482777, 13.367506]).addTo(map).bindPopup('InfraLab Berlin').openPopup();
}

function animation() {
	var currentIndex = 2;
	var element = document.getElementById('morph');
	AsciiMorph(element, {x: 0, y: 0}, 10, function () {
		setTimeout(function () {
			AsciiMorph.morph(asciis[currentIndex]);
			currentIndex++;
			currentIndex %= asciis.length;
		}, 4000);
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


function pictransform(nr, src) {

	//scr = https://codepen.io/_massimo/pen/JWKyQO?q=ascii

	var c = document.getElementById('morphify-canvas-' + nr),
		image = document.getElementById('morphify-image-' + nr),

		c_ = document.createElement('canvas'),
		ctx = c.getContext('2d'),
		ctx_ = c_.getContext('2d'),
		img, original = false,
		s = {
			'scale': 10,
			'font size': 10,
			'color': '#43A047'
		};

	image.src = src;
	image.style.display = 'none';

	img = new Image();
	img.crossOrigin = 'anonymous';
	img.src = src;
	img.onload = function () {
		c.width = img.width;
		c.height = img.height;
		// c.style.marginLeft = image.style.marginLeft = -c.width/2 + 'px';
		// c.style.marginTop = image.style.marginTop = -c.height/2 + 'px';

		c_.width = img.width = c.width / s.scale;
		c_.height = img.height = c.height / s.scale;
		draw();
	};

	function symbol(gs) {
		var s;

		if (gs > 230) {
			s = '.';
		} else if (gs > 195) {
			s = ',';
		} else if (gs > 170) {
			s = ';';
		} else if (gs > 155) {
			s = '*';
		} else if (gs > 130) {
			s = 'o';
		} else if (gs > 105) {
			s = '&';
		} else if (gs > 80) {
			s = '8';
		} else if (gs > 60) {
			s = '#';
		} else {
			s = '@';
		}

		return s;
	}

	function draw() {
		ctx_.drawImage(img, 0, 0, img.width, img.height);

		var imgData = ctx_.getImageData(0, 0, c_.width, c_.height),
			pixels = imgData.data;

		for (var y = 0; y < c_.height; y++) {
			for (var x = 0; x < c_.width; x++) {
				var index = 4 * (x + y * c_.width),
					r = pixels[index],
					g = pixels[index + 1],
					b = pixels[index + 2],
					greyscl = Math.round((r + g + b) / 3);

				var symb = symbol(greyscl);

				ctx.fillStyle = s.color;
				ctx.font = s['font size'] + "px Courier New";
				ctx.fillText(symb, x * s.scale, y * s.scale);
			}
		}
	}

	var click = function () {
		original = !original;

		if (original) {
			ctx.clearRect(0, 0, c.width, c.height);
			image.style.opacity = 1;
			c.style.opacity = 0;
			image.style.display = 'block';
			c.style.display = 'none';
		} else {
			image.style.opacity = 0;
			c.style.opacity = 1;
			image.style.display = 'none';
			c.style.display = 'block';
			draw();
		}
	};

	$(image).mouseout(function () {
		click();
	});
	$(c).mouseenter(function () {
		click();
	});

}

var pictransformers = function () {
	pictransform(1, "2015/img/workshop.jpg");
	pictransform(2, "2015/img/workshop.jpg");
};

$(document).ready(function () {
	smoothscoll();
	map();
	animation();
	// pictransformers();
});
