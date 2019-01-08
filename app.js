var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	mongoose 		= require("mongoose"),
	Spot 			= require("./models/spot.js"),
	seedDB 			= require("./seeds");


//database connection
var url 			= "mongodb://glib:password12345@ds251894.mlab.com:51894/kitespots-app";
mongoose.connect(url);

//put request parser
app.use(bodyParser.urlencoded({extended : true}));
//default files extension .ejs
app.set("view engine", "ejs");



//seed spots to database
//seedDB();



//routes
//index routes
var indexRoutes 	= require("./routes/index");
app.use(indexRoutes);
//spots routes
var spotRoutes 		= require("./routes/spots");
app.use(spotRoutes);











//listening on port 4000
app.listen(4000, function(){
	console.log("server is up!");
});






	
