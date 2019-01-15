var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	methodOverride 	= require("method-override"),
	flash 			= require("connect-flash"),
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
//stylesheets directory
app.use(express.static(__dirname + "/public"));
//ads PUT and DELETE requests
app.use(methodOverride("_method"));
//flash dissapearing messages 
app.use(flash());

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
	console.log(req.user);
	res.locals.currentUser = req.user; 
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	res.locals.info = req.flash("info");
	next();
});

//routes---------------------------------------------------------
//index routes
var indexRoutes 	= require("./routes/index");
app.use(indexRoutes);
//spots routesjs
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