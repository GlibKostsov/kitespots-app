var express = require("express"),
	router  = express.Router(),
	User = require("../models/user"),
	passport = require("passport");


//homepage
router.get("/", function(req, res){
	res.render("index");
});

//authentification
//sends register form
router.get("/register", function(req, res){
	res.render("user/register");
});

//creates new user 
router.post("/register", function(req,res){
	var newUser = new User({username : req.body.username});
	User.register(newUser, req.body.password, function(err,user){
		if(err){
			console.log(err);
			return res.render("user/register");
		}
		passport.authenticate("local")(req,res,function(){
			req.flash("success", "Welcome to KiteSpots" + user.username);
			res.redirect("/spots");
		});
	}); 
});

//sends login form
router.get("/login", function(req,res){
	res.render("user/login");
});

//logs user in
router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/spots",
		failureRedirect: "/login"
	}
	), function(req,res){});

//logs user out
router.get("/logout", function(req,res){
	req.logout();
	res.redirect("/spots");
});

module.exports = router;