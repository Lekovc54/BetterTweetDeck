var minifier = require("minifier");
var rimraf = require("rimraf");
var options = {
	template : "{{filename}}.{{ext}}"
}


var filesToDelete = [
	"source/emoji-pngs/",
	"source/fancy-settings/*.md",
	"source/fancy-settings/*.txt"
];

filesToDelete.forEach(function(file) {
	rimraf(file, function(err) {
		if (err) throw err;
	});
});

minifier.on('error', function(err) {
	console.error(err);
})

minifier.minify('./source/', options);
