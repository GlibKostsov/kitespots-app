//mongo spot schema
var mongoose 	= require("mongoose");

var spotSchema 	= new mongoose.Schema({
	name: 		 String,
	image:  	 String,
	description: String,
	country: 	 String ,
	comments: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "Comment"
				}
			  ]
});


module.exports  = mongoose.model("Spot", spotSchema);
