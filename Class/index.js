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

//________________________
//Herança
class Ferrari extends Car {
  constructor(name, year, model) {
    super(name, year); //usado para receber os dados da classe pai
    this.model = model;
  }

  apresentacao() {
    console.log(
      `Este é um carro da marca ${this.name} do modelo ${this.model}`
    );
  }
}

const apresentacaoCarro1 = new Ferrari(
  "ferrari",
  "2000",
  "b2130"
).apresentacao();
