var Spot = require("../models/spot"),
	Comment = require("../models/comment");


var middlewareObj = {};

//checks if user created a spot
middlewareObj.checkSpotOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Spot.findById(req.params.id, function(err, foundSpot){
			if(err){
				res.redirect("back");
			} else {
				if(foundSpot.author.id.equals(req.user._id)){
					next();
				} else {
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect("back");
	}
}

//checks if user created a comment
middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){
				res.redirect("back");
			} else {
				if(foundComment.author.id.equals(req.user._id)){
					next();
				} else {
					res.redirect("back");
				} 
			}
		});
	} else {
		res.redirect("/login");
	}
}


middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = middlewareObj;