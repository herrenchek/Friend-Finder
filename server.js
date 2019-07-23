var express = require("express");
var path = require("path");
var bachelors = require("./app/data/friends");

// Tells Node that we are creating an "express" server
var app = express();

// Node requires .
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });

// Browser thing running on localhost
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

  // Displays all characters
//   app.get("/api/friends", function(req, res) {
//     return res.json(bachelors);
//   });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });