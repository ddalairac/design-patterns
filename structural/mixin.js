
Log.categoryTitle('Structural patterns')
Log.patterTitle('Mixin')
/* Mixin: 
Add functionality to an existing class */

// ? 1. Create class
class Animal {
  constructor(legs, hasTail) {
    this.legs = legs;
    this.hasTail = hasTail;
  }
  eat() {
    console.log("Eating");
  }
}

// ? 2. Create object with method
let objMixin = {
  run() {
    console.log("Running");
  }
}

// ? 3. Add object to class prototype
Object.assign(Animal.prototype, objMixin);

const animal = new Animal(4, true);
console.log(animal);
animal.eat();
animal.run();