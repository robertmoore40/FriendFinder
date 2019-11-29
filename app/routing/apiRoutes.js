var importedFriendsObject = require ("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res)
    {
        res.jason(importedFriendsObject);
    })


    // post request here
    // cycle through scores and determine best match
    // return best match to user
    // make sure to exclude user input - assuming user data is pushed to the array?
    // reset process
};