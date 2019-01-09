var express = require("express"),
	router  = express.Router(),
	Spot 	= require("../models/spot");



//shows all spots
router.get("/spots",function(req,res){
	Spot.find({}).select("name image").exec(function(err, foundSpots){
		if(err){
			console.log(err);
		} else {
			res.render("spots/spots", {spots:foundSpots});
		}

	});
});

//creates new spot
router.post("/spots",function(req,res){
	var newSpot = req.body.spot
	Spot.create(newSpot, function(err, spot){
		if(err){
			console.log(err);
		} else {
			res.redirect("/spots")
		}
	});
});

//shows new spot form
router.get("/spots/new", function(req, res){
	res.render("spots/new");
});

//shows more info about a spot
router.get("/spots/:id", function(req,res){
	Spot.findById(req.params.id, function(err, foundSpot ){
		if(err){
			console.log(err);
		} else {
			res.render("spots/show", {spot : foundSpot});
		}
		
	});
});

//shows edit spot form
router.get("/spots/:id/edit", function(req, res){
	Spot.findById(req.params.id, function(err, foundSpot){
		if(err){
			console.log(err);
		} else {
			res.render("spots/edit", {spot : foundSpot})
		}

	});
});

//updates a spot
router.put("/spots/:id", function(req,res){
	Spot.findByIdAndUpdate(req.params.id, req.body.spot, function(err, updatedSpot){
		if(err){
			console.log(err)
			res.redirect("/spots")
		} else {
			res.redirect("/spots/" + req.params.id)
		}
	});
});

//deletes a spot
router.delete("/spots/:id", function(req,res){
	Spot.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err)
			res.redirect("/spots");
		} else {
			res.redirect("/spots");
		}
	});
});


module.exports = router;	