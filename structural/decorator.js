"use strict";
/* Decorator:
The goal (just like the mixin) is to add functionality to a class. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Design Patterns");
// ? Examples from: https://www.typescriptlang.org/docs/handbook/decorators.html
// ? 0. tsconfig: "experimentalDecorators": true, 
console.log("Decotators: ");
function first() {
    // this is the decorator factory, it sets up
    // the returned decorator function
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        // this is the decorator
        // do something with 'target', 'propertyKey' and 'descriptor'...
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.method = function () { };
    __decorate([
        first(),
        second()
    ], ExampleClass.prototype, "method", null);
    return ExampleClass;
}());
// const objWithDecorator = new ExampleClass();
// console.log(objWithDecorator);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var BugReport = /** @class */ (function () {
    function BugReport(t) {
        this.type = "report";
        this.title = t;
    }
    BugReport = __decorate([
        sealed
    ], BugReport);
    return BugReport;
}());
// const bug = new BugReport("some bug");
// console.log(bug);
