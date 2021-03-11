var express = require('express');
var app = express();
var absolutePath = __dirname+"/views/index.html"
app.get('/:word/echo', function(req, res, next) {
  next();
}, function(req, res) {
  res.send({echo: req.params.word});
});
app.use(function middleware(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next();
});
app.get("/json", (req, res) => {
  const msg = "Hello json";
  return res.json({"message": process.env.MESSAGE_STYLE === "uppercase" ? msg.toUpperCase() : msg})})
app.get("/", (req, res) => res.sendFile(absolutePath))
app.use("/public", express.static(__dirname + "/public"))































 module.exports = app;
