var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Contet-Type" : "text/plain"});
	res.write("Testing my github website");
	res.end();
}).listen(3000);
