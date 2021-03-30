require('dotenv').config();
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
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





































 module.exports = app;
