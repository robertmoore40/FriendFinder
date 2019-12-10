var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
// app.listen(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
// app.use(bodyParser.json());

app.use(express.text());
// app.use(bodyParser.text());

// application require express
// application requite bodyParser

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//   server.js finished
  