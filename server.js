var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.get("/get", jsonParser, (req, res) => {
    var number = JSON.stringify({number: Math.floor(Math.random() * 100)});
    res.send(number);
});
app.listen(3000, function(){
    console.log("Server waiting for connection...");
});