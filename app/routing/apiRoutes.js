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
      var closestMatch = 0;
    
      // first loop

      for(var i = 0; i<importedFriendsObject.length;i++){
        var scoresDifference = 0;
         //run through scores to compare friends
      for(var j=0; j<newUserScore.length; j++){
        scoresDifference += (Math.abs(parseInt(importedFriendsObject[i].scores[j]) - parseInt(newUserScore[j])));
      }
      scoreArray.push(scoresDifference);
    }
    for(var i=0; i<scoreArray.length; i++){
      if(scoreArray[i] <= scoreArray[closestMatch]){
        closestMatch = i;
      }
    }

    var closestMatch = importedFriendsObject[closestMatch];
    res.json(closestMatch);

    //pushes new submission into the friends object array
    importedFriendsObject.push(req.body);
  });
      };
    
  // declare vars
  // how to let js know a var should be a number


    // cycle through scores and determine best match
    // return best match to user
    // make sure to exclude user input - assuming user data is pushed to the array?
    // reset process

