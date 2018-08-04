var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Variables
// =============================================================

let tablesArray = [];
let waitlistArray = [];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


// Displays all people on the waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlistArray);
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tablesArray);
});

app.post("/api/tables", function(req, res){

    let newTable = req.body;

  
    console.log(newTable);
  
    tablesArray.push(newTable);
  
    res.json(newTable);

});

// Create New Characters - takes in JSON input
app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    let newWaitlistTable = req.body;

  
    console.log(newWaitlistTable);
  
    waitlistArray.push(newWaitlistTable);
  
    res.json(newWaitlistTable);

  });
  

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
