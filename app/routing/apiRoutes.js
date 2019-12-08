var importedFriendsObject = require ("../data/friends.js");
Bu
// keep variables in global scope to import to other functions
module.exports = function(app) {

    // get request

    app.get("/api/friends", function(req, res)
    {
        res.json(importedFriendsObject);
    });

    app.post("/api/friends", function(req, res) {

      var newUserScore = req.body.scores
      var scoreArray = [];
    
      // declare vars
      // how to let js know a var should be a number


      });
    };
   




    // cycle through scores and determine best match
    // return best match to user
    // make sure to exclude user input - assuming user data is pushed to the array?
    // reset process

