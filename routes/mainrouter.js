var express = require("express");
var route = express.Router();

//Home page router
route.get("/", function(req, res){

  //testing adding custom http headers
  res.set("X-hey", "testing");

  //message variable will place a notification at the top of website
	res.render("index", {title: "Home Page", message: null});
});

//Game page router
route.get("/Games", function(req, res){
  res.render("games/game", {title: "Games", message: null});
});
route.get("/Games/:id", function(req, res){
  res.send("Hello" + req.params.id);
});

// route.get("/:thing", function(req, res){
// 	res.send("Hello "  + req.params.thing);
// });

route.get("/Donate", function(req, res){
  res.render("donate", {title: "Donate", message: null});
});
module.exports = route;
