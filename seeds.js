var Spot = require("./models/spot")
var Comment  = require("./models/comment")


//data seed
var data = [
	{
		name: "Boggie Mood",
		image:"https://cdn.pixabay.com/photo/2018/12/05/13/04/kite-surfing-3857698_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Albania"
	},

	{
		name: "Clomsie Dude",
		image:"https://cdn.pixabay.com/photo/2015/09/27/16/35/kitesurfer-960949_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Andorra"

	},
	{
		name: "Frutie Blooms",
		image:"https://cdn.pixabay.com/photo/2017/12/28/09/20/groynes-3044711_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Argentina"
	},
	{
		name: "Boggie Mood",
		image:"https://cdn.pixabay.com/photo/2018/12/05/13/04/kite-surfing-3857698_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Albania"
	},

	{
		name: "Clomsie Dude",
		image:"https://cdn.pixabay.com/photo/2015/09/27/16/35/kitesurfer-960949_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Andorra"

	},
	{
		name: "Frutie Blooms",
		image:"https://cdn.pixabay.com/photo/2017/12/28/09/20/groynes-3044711_960_720.jpg",
		description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		country: "Argentina"
	}

]

var dataComments = [
	{	author: "Bob",
		text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
	{	author: "Will",
		text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
	{	author: "Henry",
		text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
	{   author: "Tom",
		text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "}	
]



function seedDB(){
	Spot.remove({},function(err){
		if(err){
			console.log(err)
		} else {
			console.log("spots removed!")
		}
	});
	Comment.remove({},function(err){
		if(err){
			console.log(err)
		} else {
			console.log("comments removed!")
		}
	});



	data.forEach(function(seed){
		Spot.create(seed, function(err, spot){
			if(err){
				console.log(err);
			}else{
				console.log("added spot" + seed.name);
				dataComments.forEach(function(commentSeed){
					Comment.create(commentSeed, function(err, comment){
						if(err){
							console.log(err);
						} else {
							spot.comments.push(comment);	
							console.log("added new comment");
						}

					});

					
				});

			}
		});
	});

}




function seedComments(){
	dataComments.forEach(function(seed){
		Comment.create(seed, function(err, comment){
			if(err){
				console.log(err);
			} else {
				console.log("added comment");
			}
		});
	});
}


Spot.create(
			{
				name: 			"Frutie Blooms",
				image: 			"https://cdn.pixabay.com/photo/2017/12/28/09/20/groynes-3044711_960_720.jpg",
				description: 	"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
				country: 		"Argentina"
			}, function(err, spot){

				if(err){
					console.log(err);
				}else{
					console.log("added spot");
						Comment.create({	author: "Bob",
											text : 	"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "}
										, function(err, comment){
							if(err){
								console.log(err);
							} else {
								spot.comments.push(comment);
								spot.save();
								console.log("added new comment");
								
							}
						});



				}
		});

module.exports = {} ;