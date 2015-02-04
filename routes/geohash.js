var express = require('express');
var geohashPoly = require('geohash-poly');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send("Goehash");
// });

router.post('/', function(req, res, next) {
 	var polygon = JSON.parse(req.body.coordsarray);
  // [[[-122.350051, 47.702893 ], [-122.344774, 47.702877 ], [-122.344777, 47.70324 ], [-122.341982, 47.703234 ], [-122.341959, 47.701421 ], [-122.339749, 47.701416 ], [-122.339704, 47.69776 ], [-122.341913, 47.697797 ], [-122.341905, 47.697071 ], [-122.344576, 47.697084 ], [-122.344609, 47.697807 ], [-122.349999, 47.697822 ], [-122.350051, 47.702893 ]]];

	var options = {
	  coords: polygon,
	  precision: req.body.precision,
	  hashMode: 'inside',
	  rowMode: true
	}

	geohashPoly(options, function (err, hashes) {
	  	res.send(hashes);
	});
});

module.exports = router;