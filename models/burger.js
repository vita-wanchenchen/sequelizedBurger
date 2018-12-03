module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
    return Burger;
  };
/*
var burger = {
    all: function(cb) {

    },

    create: function(cols, vals, cb) {

    },

    update: function(objColVals, condition, cb) {

    }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
*/