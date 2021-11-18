
const string = 'Decotator';
const style = 'background :black; color: white; padding:5px; font-size:16px';
console.log(`%c${string}`, style)


/**  Decorator (TS only): 
The goal (just like the mixin) is to add functionality to a class, but in a diferent way. */
// ? Examples from: https://www.typescriptlang.org/docs/handbook/decorators.html

// ? 0. tsconfig: "experimentalDecorators": true, 
function first() {
  // this is the decorator factory, it sets up
  // the returned decorator function
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
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
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() { }
}
const objWithDecorator = new ExampleClass();
console.log(objWithDecorator);


function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("some bug");
console.log(bug);

