var http = require("http");
http.createServer(function(req, res){
res.write("Database"); 
res.end();
}).listen(8080);