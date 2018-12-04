var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/");

// Create routes and set up logic within routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll()
    .then(function(data) {
       console.log(data);
       var hbsObject = {
        burgers: data
    };
    res.render("index", hbsObject);
    });
});

// Create new burger
router.post("/api/burgers", function(req,res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(data){
        res.redirect("/");
    });
});

// Devoured the burger created
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data){
        res.json(data);
    });

});

// Export routes for server.js to use.
module.exports = router;