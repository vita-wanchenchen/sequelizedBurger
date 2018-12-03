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

router.post("/api/burgers", function(req,res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(data){
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    /*burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });*/
});

// Export routes for server.js to use.
module.exports = router;