const DB = require("./DB");

let users = {};

users.getAllUsers = function () {
    // Mimic DB call to users table
    return DB.users;
};

module.exports = users;
