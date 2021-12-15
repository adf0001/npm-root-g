
// npm-root-g @ npm, get the result or the cached result, of cmd 'npm root -g'. 

var child_process = require('child_process');

var cachedResult = null;

module.exports = function (cb, refresh) {
	if (cachedResult && !refresh) { cb(null, cachedResult); return; }

	child_process.exec('npm root -g', function (err, stdout) {
		if (err) { cb(err); return; }

		cb(null, cachedResult = stdout.toString().trim());
	});
};
