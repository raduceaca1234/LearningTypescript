"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: 'Tests',
    lastName: 'Compiling',
    getFullName: function () { return "Test"; }
};
//aPerson = someObj();
var Client = /** @class */ (function () {
    function Client(name) {
        this.name = name;
    }
    return Client;
}());
var client = new Client("Radu");
console.log(client.name);
var DaysOfTheWeekend;
(function (DaysOfTheWeekend) {
    DaysOfTheWeekend[DaysOfTheWeekend["SUN"] = 0] = "SUN";
    DaysOfTheWeekend[DaysOfTheWeekend["MON"] = 1] = "MON";
    DaysOfTheWeekend[DaysOfTheWeekend["TUE"] = 2] = "TUE";
    DaysOfTheWeekend[DaysOfTheWeekend["WED"] = 3] = "WED";
    DaysOfTheWeekend[DaysOfTheWeekend["THU"] = 4] = "THU";
    DaysOfTheWeekend[DaysOfTheWeekend["FRI"] = 5] = "FRI";
    DaysOfTheWeekend[DaysOfTheWeekend["SAT"] = 6] = "SAT";
})(DaysOfTheWeekend || (DaysOfTheWeekend = {}));
var day;
day = DaysOfTheWeekend.MON;
if (day == DaysOfTheWeekend.MON) {
    console.log("Got to go to work");
}
//generic function
function echo(arg) {
    return arg;
}
var myStr = echo(1);
var gen_1 = require("./gen");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(gen_1.User));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(gen_1.User));
var admin = new Admin('a', 'a');
var manager = new Manager('b', 'b');
function personEcho(person) {
    return person;
}
var foo = personEcho(admin);
