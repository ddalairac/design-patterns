"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var string = 'Decotator';
var style = 'background :black; color: white; padding:5px; font-size:16px';
console.log("%c" + string, style);
/**  Decorator (TS only):
The goal (just like the mixin) is to add functionality to a class, but in a diferent way. */
// ? Examples from: https://www.typescriptlang.org/docs/handbook/decorators.html
// ? 0. tsconfig: "experimentalDecorators": true, 
function first() {
    // this is the decorator factory, it sets up
    // the returned decorator function
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        // this is the decorator
        // do something with 'target', 'propertyKey' and 'descriptor'...
        console.log("first(): called");
        console.log('target:', target);
        console.log('propertyKey:', propertyKey);
        console.log('descriptor:', descriptor);
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
var objWithDecorator = new ExampleClass();
console.log(objWithDecorator);
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
var bug = new BugReport("some bug");
console.log(bug);
