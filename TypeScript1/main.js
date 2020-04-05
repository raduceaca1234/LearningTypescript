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
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
var x = 10;
var y = 20;
var sum = x + y;
var title = 'Some text title';
var isBeginner = true;
var total = 0;
var name = 'Radu';
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
//subtypes of all other types
var n;
var u = undefined;
//^^^
var isNew = null;
var myName = undefined;
//these are the same
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//exactly one string value and one numeric value
//the order has to match
//we cannot have let person1: [string,number] = [ 22, 'Chris'];
//or let person1: [string,number] = ['Chris', 22, 35];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//or enum Color {Red = 5, Green, Blue};
//and Green is 6
//otherwise Green is 1
var c = Color.Green;
console.log(c);
//any type
var randomValue = 10;
randomValue = true;
randomValue = 'Radu';
var myVariable = 10;
//these will not throw an error because myVariable is of type any
//console.log(myVariable.name);
//myVariable();
//myVariable.toUppercase();
//unknown type
var myVariable2 = 10;
//these will throw an error because myVariable is of type unknown
//console.log(myVariable2.name);
//myVariable2();
//myVariable2.toUppercase();
//but this will not
//(myVariable2 as string).toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//works perfectly
var a;
a = 10;
a = true;
//type error
//b is already declared
////let b = 20;
////b = true;
//restriction, multiValue must be of type number or boolean
var multiType;
multiType = 20;
multiType = true;
//no restriction, anyType can be of any type
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//num2 is optional
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
//num2 has a default value
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add3(5, 10);
add3(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Radu',
    lastName: 'Ceaca'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Radu');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Ceaca');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
