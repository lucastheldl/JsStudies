class ClassName {
  constructor() {
    //...
  }
}
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const car1 = new Car("Audi", 2009);
const car2 = new Car("Ferrari", 2015);

console.log(car1, car2);
