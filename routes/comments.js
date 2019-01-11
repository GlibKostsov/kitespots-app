var express = require("express"),
	router  = express.Router(),
	Spot    = require("../models/spot"),
	Comment = require("../models/comment"),
	middleware = require("../middleware/index");




//send a form for a new comment
router.get("/spots/:id/comments/new",  middleware.isLoggedIn  ,function(req,res){
	Spot.findById(req.params.id, function(err, foundSpot){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {spot:foundSpot});
		}

	});
});

//creates a new comment
router.post("/spots/:id/comments",  middleware.isLoggedIn  ,function(req,res){
	Spot.findById(req.params.id,function(err, foundSpot){
		if(err){
			console.log(err);
			res.redirect("/spots/" + req.params.id);
		} else {
			Comment.create(req.body.comment,function(err, createdComment){
				if(err){
					console.log(err);
					res.redirect("/spots/" + req.params.id);
				} else {
					createdComment.author = { id: req.user._id , username: req.user.username };
					createdComment.save();
					foundSpot.comments.push(createdComment);
					foundSpot.save();
					res.redirect("/spots/" + req.params.id);
				}
			});
		}
	});
});

//sends update comment form
router.get("/spots/:id/comments/:comment_id/edit", middleware.checkCommentOwnership ,function(req,res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			res.redirect("back")
		} else {
			res.render("comments/edit", {spot_id : req.params.id, comment : foundComment})
		}
	});
});


//update a comment
router.put("/spots/:id/comments/:comment_id", middleware.checkCommentOwnership ,function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err){
			console.log(err);
		} else {
			res.redirect("/spots/" +  req.params.id)
		}
	});
});

//destroy a comment
router.delete("/spots/:id/comments/:comment_id", middleware.checkCommentOwnership , function(req,res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			res.redirect("back");
		} else {
			res.redirect("/spots/" + req.params.id);
		}
	});
});


module.exports = router;