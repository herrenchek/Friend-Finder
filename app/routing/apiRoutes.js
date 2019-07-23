var bachelors = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(bachelors)
    })

    app.post("/api/friends", function (req, res) {
        var data = req.body;
        var reqScores = data.scores;
        var bestMatch = {};

        for (var i = 0; i < bachelors.length; i++) {
            var bachelor = bachelors[i];
            var diffArr = [];
            var difference = 0;
            for (var j = 0; j < reqScores.length; j++) {
                var currentReq = reqScores[j];
                var bachelorScore = bachelor.scores[i];
                var diff = Math.abs(currentReq - bachelorScore);
                diffArr.push(diff);
            }
            difference = diffArr.reduce(function(acc, currentNum) {
                return acc + currentNum
            })
        }

        // * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

        // * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        //   * Example:
        //     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        //     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        //     * Total Difference: **2 + 1 + 2 =** **_5_**
        // * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
        // * The closest match will be the user with the least amount of difference.
        res.send(bestMatch);
    })
};