Log.categoryTitle('Creational patterns' )

Log.patterTitle('Class')
/* Class:
Is a blueprint for creating objects */

class Car {
  constructor(brand, model, year, doors) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.doors = doors;
  }
}

const car = new Car("Peugeot", "208", 2021, 4);

console.log(car);


Log.patterTitle('Constructor Class')
/* Constructor class
Extends another class and inherited their properties */

class Truck extends Car {
  constructor(brand, model, year, doors, is4x4) {
    super(brand, model, year, doors);
    this.is4x4 = is4x4;
  }
}

const truck = new Truck("Scania", "R420", 2021, 4, true);

console.log(truck);

Log.patterTitle('Singleton')
/* Singleton:
Always return the same instance */

class Singleton {
  constructor(name, age) {
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      Singleton.instance = this;
    } else {
      console.warn("You can't create a new instance of a singleton class");
      // throw new Error("You can't create a new instance of a singleton class");
    }
    return Singleton.instance;
  }
  static instance;
}

const singleton1 = new Singleton("John", 30);
console.log(singleton1);
const singleton2 = new Singleton("Ben", 41);
console.log(singleton2);


Log.patterTitle('Factory')
/* Factory:
Is a function (or class method) that returns an object */

class Factory {
  static createClassBCar(brand) {
    switch (brand) {
      case "Peugeot":
        return new Car(brand, "208", 2021, 4);
      case "Volkswagen":
        return new Car(brand, "Gol", 2021, 4);
      case "Scania":
        return new Truck(brand, "P410", 2021, 2, true);
      default:
        console.warn(brand + " brand doesn't exist. Default car created");
        return new Car("Peugeot", "208", 2021, 4);
    }
  }
}

const carf = Factory.createClassBCar("Volkswagen");
console.log('Factory: ', carf);