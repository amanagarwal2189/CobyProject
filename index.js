var express = require("express");
var app= express();

//this is what helps in socket connection
var http = require('http').Server(app);
var io = require('socket.io')(http);

//only this folder will be public. This is a keyword.. has to be "public"
app.use(express.static('public'));
app.set("port", process.env.PORT || "3000");

app.get("/", function(req,res){
	res.render("index.html");
});

//opens a port on your computer and starts a server
http.listen(app.get("port"), function(){
	console.log("Listening to port");
});