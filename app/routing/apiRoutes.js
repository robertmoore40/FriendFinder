var importedFriendsObject = require ("../data/friends.js");


var totalDifference;

// keep variables in global scope to import to other functions
module.exports = function(app) {

    // get request

    app.get("/api/friends", function(req, res)
    {
        res.json(importedFriendsObject);
    });

    // correct as of 120119


    // post request here
    // 11292019

    app.post("/api/friends", function(req, res) {

        //secretsauce 

        var calculatedLowestDifferenceFriend = {
          name: "",
          image: "",
          totalScoreDifference: 0
          // total score difference can be anything here - ?
          // difference between javascript and every other language
          // name is a string, image is a string, totaldiff = number
          // this implies the var is a number
          // other languages dim, double, float, etc
          // it's important to set up value that is the same type as what you expect to get later on
        };
    
        var userInputs = req.body;

        // correct

        var nameInput = userInputs.name;
        
        // THIS IS NOT THE SAME AS ABOVE!!! Important!
        // var nameInput = req.body.userInputs.name;


        var calculatedScores = userInputs.scores;
    
        // correct

        var userInputScore = calculatedScores.map(function(item) {
          return parseInt(item, 12);
          // is 12 needed? consolelog it to double check - check with Austin Tuesday
          // returnpartInt(item);
          // makes new array where values are numbers as opposed to strings
          // removed
        });

        // create userInputsItem to take in quiz score

        userInputs = {
          name: nameInput,
          image: userInputs.image,
          scores: userInputScore
        };
    // console log present items

  // 120119
  // Do I want to use a new variable? Okay - but indirect
  // maybe consider only using the req.body

  // EXCEPTION IS THE SCORE ARRAY - still going to want to change these items to numbers - not strings
  // make a new var that's an array
  // var newScores = [];
  // map - req.body.image
  // in order to reference the score - use the new array

  // remove extra steps


        console.log("nameInput is: " + nameInput);
          //console.log(req.body.name);
          
          
        console.log("calculated Score is: " + calculatedScores);
    
        // reduce method here
        // tutoring session
        // arrow functions

        // make differences equal to zero 
        // tutoring

        //reduce is a higher order function - watch traversy video 
        // get sum of values
        // funfunfunction - has good video on this
        // espectially reduce



        var arrowSumObject = userInputScore.reduce((a, userInputScore) => a + userInputScore, 0);
    
        // getting a total number for user score
        // reduce function looks correct - double check

        // takes in two parameters - arrow with a, and userInputScore - 
        // may not be set up right - two new parameters 

        // use total and num - 0 at the end may not be necessary

        // 
        // 

    // console log out items

        // console.log("arrowSumObject is: " + arrowSumObject);
        // console.log("Lowest difference friend return:  " + calculatedLowestDifferenceFriend.totalScoreDifference);
    
        // rethink this - 120119
        // My goal here is to 
        // 
        // totalScoreDiff is what we do at the end with the reduce function
        // go through friends.js array
        // 
        // loop through array, what is total score number vs userInput.score? something like that, var may not be correct
        // 
        // We're listing Tom Cruise's score, ben franklins score
        // which score is closest?
        // 
        // find local minimum
        // look into - 3/4 different way this can be done
        // FOREACH
        // for each friend, get their number and subtract theirs from ours
        // make absolute value afterwards - can't be -5 away
        // kind of sorting, but not really
        // first iteration 


        // math.abs = absolute value
        // 
        // 
        // 
        // 
        // 
        // 
        // 
        // 
        // 

    // write loop

      });
    };
   




    // cycle through scores and determine best match
    // return best match to user
    // make sure to exclude user input - assuming user data is pushed to the array?
    // reset process

