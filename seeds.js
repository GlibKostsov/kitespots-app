var Spot = require("./models/spot")


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

function seedDB(){
	data.forEach(function(seed){
		Spot.create(seed, function(err, spot){
			if(err){
				console.log(err);
			}else{
				console.log("added spot" + seed.name);
			}
		});
	});

}


module.exports = seedDB;