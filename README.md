# npm-root-g
get the result or the cached result, of cmd 'npm root -g'.

# Install
```
npm install npm-root-g
```

# Usage & Api
```javascript

var npm_root_g = require("npm-root-g");

var tm0 = (new Date()).getTime();

//npm_root_g (cb [, refresh] )
npm_root_g(		//execute the cmd at the 1st time
	function (err, data1) {
		var tm1 = (new Date()).getTime();

		console.log(data1);
		console.log("tm=" + (tm1 - tm0));

		npm_root_g(		//get the cached result after the 1st time, except the 'refresh' is set true.
			function (err, data2) {
				var tm2 = (new Date()).getTime();

				console.log(data2);
				console.log("tm=" + (tm2 - tm1));

				done(!(
					data1 === data2 &&
					(tm1 - tm0) > (tm2 - tm1)
				));
			}
		);

	}
);




```
