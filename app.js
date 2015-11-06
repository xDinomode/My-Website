var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hello world again");
});

app.listen(3000);
