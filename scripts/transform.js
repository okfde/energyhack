var fs = require('fs');

var transform = function (nr) {
	var lines = fs.readFileSync('ascii' + nr + '.txt').toString().split('\n');
	return '[' + lines.map(function (line) {
		return  JSON.stringify(line);
	}).join(',') + ']';
};

var data = 'var asciis = [' + [transform(1), transform(2), transform(3), transform(4)].join(',') + '];';

fs.writeFileSync('../assets/js/ascii.js', data);
