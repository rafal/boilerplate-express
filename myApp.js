var express = require('express');
var app = express();
console.log("Hello World")
console.log(__dirname+"/views/index.html")
var absolutePath = __dirname+"/views/index.html"
app.get("/", (req, res) => res.sendFile(absolutePath))
app.use("/public", express.static(__dirname + "/public"))



































 module.exports = app;
