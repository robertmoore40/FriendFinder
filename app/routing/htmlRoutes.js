var path = require("path");

// path function required - mvc 112919


module.exports = function(app) {
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
  
    app.use(function(req, res) {
      res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
  };