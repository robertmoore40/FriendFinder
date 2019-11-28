var express = require("express");
var path = require("path");

var app = express();
var port = 3000;

var bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());