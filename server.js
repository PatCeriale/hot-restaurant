// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the linking to add & view js
// =============================================================
app.use(express.static("public"))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table (DATA)
// =============================================================
let resTables=[];
let waitTables=[];
let allTables=[]; //this array is resTable + waitTables

// Routes
// ===========================================================
// Displays Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
// Displays All Tables
app.get("/api/tables", function(req, res) {
    return res.json(allTables);
  });

//  Displays Add Table 
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
    console.log(newTable);
    res.json(newTable);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  