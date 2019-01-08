var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	mongoose 		= require("mongoose");


//database connection
var url 			= "mongodb://glib:password12345@ds149894.mlab.com:49894/yelpcamp-app";
mongoose.connect(url);

//put request parser
app.use(bodyParser.urlencoded({extended : true}));
//default files extension .ejs
app.set("view engine", "ejs");

//routes
var indexRoutes 	= require("./routes/index");
app.use(indexRoutes);


//listening on port 4000
app.listen(4000, function(){
	console.log("server is up!");
});






	
