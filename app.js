var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	methodOverride 	= require("method-override"),
	mongoose 		= require("mongoose"),
	passport 		= require("passport"),
	LocalStrategy 	= require("passport-local"),
	Spot 			= require("./models/spot.js"),
	Comment 		= require("./models/comment.js"),
	User 			= require("./models/user.js");
	// seedFunctions 	= require("./seeds");

//database connection
var url 			= "mongodb://glib:password12345@ds251894.mlab.com:51894/kitespots-app";
mongoose.connect(url);
//put request parser
app.use(bodyParser.urlencoded({extended : true}));
//default files extension .ejs
app.set("view engine", "ejs");
//ads PUT and DELETE requests
app.use(methodOverride("_method"));


//passport configs----------------------------------------------
app.use(require("express-session")({
	secret: "this is my secret",
	resave: "false",
	saveUninitialized: false
	}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//----------------------------------------------------


//shared variables
app.use(function(req,res,next){
	res.locals.currentUser = req.user; 
	next();
});


//routes---------------------------------------------------------
//index routes
var indexRoutes 	= require("./routes/index");
app.use(indexRoutes);
//spots routes
var spotRoutes 		= require("./routes/spots");
app.use(spotRoutes);
//comments routes
var commentRoutes 	= require("./routes/comments");
app.use(commentRoutes);
//-----------------------------------------------------


//listening on port 4000
app.listen(4000, function(){
	console.log("server is up!");
});