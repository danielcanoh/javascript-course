'use strict';

// TODO FORMAS DE IMPLEMENTAR POO

/*
// FIXME Constructor Functions
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}
const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods
  // Bad practice
  // this.calcAge = function() {
  //   console.log(2022 - this.birthYear);
  // }
}

const daniel = new Person('Daniel', 2001);
console.log(daniel);

const aleja = new Person('Alejandra', 1996);
console.log(aleja);

const jack = new Person('Jack', 2005);
console.log(jack);

// Prototypes
// Agregar métodos
Person.prototype.calcAge = function() {
  console.log(2022 - this.birthYear);
}

console.log(Person.prototype);
console.log(daniel.__proto__);

jack.calcAge();
aleja.calcAge();

// Agregar propiedades
Person.prototype.species = 'Homo Sapiens';
console.log(daniel);

const arr = [1, 2, 3, 1, 4, 2, 5, 6, 1, 1];
console.log(arr.__proto__);

Array.prototype.unique = function() {
  return [... new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.__proto__);

console.dir(x => x+1);


// FIXME Clases
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jess = new PersonCl('Jess', 2000);
console.log(jess);
jess.calcAge();

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }
console.log(jess);
jess.greet();


const account = {
  owner: "Daniel",
  movements: [200, 100, 500, -300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
}
console.log(account.latest);
account.latest = 50;
console.log(account);


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  

  // Methods will be added to prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property 
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

const daniel = new PersonCl("Daniel Hernández", 2001);

console.log(daniel.age);
daniel.fullName = 'Daniel Hernández'

PersonCl.hey();

// FIXME Object.create()
// Crear el prototipo
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

// Crear los objetos y vincularlos al prototipo
const steven = Object.create(PersonProto)
steven.name = 'Steven';
steven.birthYear = 2000;
console.log(steven);
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1996);
console.log(sarah);
sarah.calcAge();

const daniel = Object.create(PersonProto, {
  firstName: {value: 'Daniel'}, 
  birthYear: {value: 2001}
});
console.log(daniel);
daniel.calcAge();

// FIXME Herencia entre clases
// Usando funciones constructoras
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
  console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2001, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);


// Usando clases

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  

  // Methods will be added to prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Set a property 
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} years old, but as a student I feel more like ${2022 - this.birthYear + 10}`);
  }
}

const sarah = new StudentCl('Sarah Jones', 2001, 'Computer Science');
console.log(sarah);
sarah.introduce();
sarah.calcAge();
*/
class Account {
  // Public fields (instances)
  locale = navigator.language;
  
  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    if(this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
    }
  }

  // Private methods
  #approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Daniel', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());
acc1.requestLoan(600);

// Chaining methods
acc1.deposit(1000).withdraw(500).deposit(4000).deposit(150).withdraw(800);
console.log(acc1.getMovements());