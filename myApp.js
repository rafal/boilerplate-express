var express = require('express');
var app = express();
var absolutePath = __dirname+"/views/index.html"
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.post("/name", function(req, res) {
  console.log(JSON.stringify(req.body))
  var { first: firstName, last: lastName } = req.body;
  res.json({
    name: `${firstName} ${lastName}`
  });
});
app.get("/json", (req, res) => {
  const msg = "Hello json";
  return res.json({"message": process.env.MESSAGE_STYLE === "uppercase" ? msg.toUpperCase() : msg})})
app.get("/", (req, res) => res.sendFile(absolutePath))
app.use("/public", express.static(__dirname + "/public"))































 module.exports = app;
