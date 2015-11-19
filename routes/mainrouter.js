var express = require("express");
var route = express.Router();

route.get("/", function(req, res){
            res.set("X-hey", "testing");
	res.render("index", {title: "Home Page", message: "global message"});
});

route.get("/:thing", function(req, res){
	res.send("Hello "  + req.params.thing);
});

module.exports = route;
