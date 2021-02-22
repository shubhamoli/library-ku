const UserModel = require("../model/user");

let UserRepository = {};

UserRepository.getAllUsers = function () {
    return UserModel.getAllUsers();
};

UserRepository.getUserById = function (id) {
    return {};
};

UserRepository.getUserByHandle = function (handle) {
    return {};
};

module.exports = UserRepository;
