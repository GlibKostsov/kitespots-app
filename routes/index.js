var express = require("express"),
	router  = express.Router();


//homepage
router.get("/", function(req, res){
	res.render("index");
});



module.exports = router;