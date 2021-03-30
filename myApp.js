require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));
app.use(function(req, rep,next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

var absolutePath = __dirname + '/views/index.html';
app.get("/",function(req, res) {
              res.sendFile(absolutePath);
            });
console.log(process.env.MESSAGE_STYLE);
console.log("Hello json".toUpperCase());

app.get("/json", function(req, res){

var response = "Hello json";

if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello json".toUpperCase();
  console.log(response);
} else {
  response = "Hello json";
}

res.json({"message": response});
});

app.get("/:word/echo", function(req, res){
 res.json({"echo": req.params.word});})

var handler = function (req, res) {
    var response
    if(req.method === "GET")
    {
        response = req.query.first + " " + req.query.last;
    }else
    {
        response = req.body.first + " " + req.body.last;
    }

  res.json({"name": response});};


app.route("/name").get(handler).post(handler);



































 module.exports = app;
