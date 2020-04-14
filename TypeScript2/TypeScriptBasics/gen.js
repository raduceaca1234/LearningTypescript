"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
exports.User = User;
