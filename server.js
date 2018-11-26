var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server to begin listening to the client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});