

var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var route = require("./routes/mainrouter");

app.set("view engine", "ejs");
app.set("views", "./views");

//app.enable("trust proxy");
//app.set("trust proxy", "loopback");

//TODO: remove this and let nginx deliver static content later!!
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", route);

app.listen(3000);
