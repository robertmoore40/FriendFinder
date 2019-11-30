var importedFriendsObject = require ("../data/friends.js");

module.exports = function(app) {

    // get request

    app.get("/api/friends", function(req, res)
    {
        res.jason(importedFriendsObject);
    });


    // post request here
    // 11292019

    app.post("/api/friends", function(req, res) {

        var totalDifference;

        var calculatedLowestDifferenceFriend = {
          name: "",
          image: "",
          totalScoreDifference: 0
        };
    
        var userInputs = req.body;
        var nameInput = userInputs.name;
        var calculatedScores = userInputs.scores;
    
        var userInputScore = calculatedScores.map(function(item) {
          return parseInt(item, 12);
        });

        // create userInputsItem to take in quiz score

        userInputs = {
          name: nameInput,
          image: userInputs.image,
          scores: userInputScore
        };
    // console log present items


        console.log("nameInput is: " + nameInput);
        console.log("calculated Score is: " + calculatedScores);
    
        // reduce method here
        // tutoring session
        // arrow functions

        // make differences equal to zero 
        // tutoring
        var arrowSumObject = userInputScore.reduce((a, userInputScore) => a + userInputScore, 0);
    
    // console log out items

        console.log("arrowSumObject is: " + arrowSumObject);
        console.log("Lowest difference friend return:  " + calculatedLowestDifferenceFriend.totalScoreDifference);
    
    // write loop

      });
    };
   




    // cycle through scores and determine best match
    // return best match to user
    // make sure to exclude user input - assuming user data is pushed to the array?
    // reset process

