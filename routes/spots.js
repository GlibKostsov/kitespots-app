var express = require("express"),
	router  = express.Router(),
	Spot 	= require("../models/spot");

//all spots
router.get("/spots", function(req, res){
	Spot.find({},
		function(err,spots){
			if(err){
				console.log(err);
			} else {
				res.render("spots/spots",{spots:spots});
			}
		}
	)	
});



module.exports = router;	