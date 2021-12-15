// global, for html page
npm_root_g = require("../npm-root-g.js");

module.exports = {

	"npm_root_g()": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

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
	},


};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test',
	function () {
		for (var i in module.exports) {
			it(i, module.exports[i]).timeout(10000);		//maybe a long time at some pc
		}
	}
);
