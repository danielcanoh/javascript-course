'use strict';

console.log('\nPARÁMETROS POR DEFECTO');
/**
 * TODO PARÁMETROS POR DEFECTO
 * Los parámetros por defecto se aplican cuando no pasamos un argumento
 * que la función espera.
 */
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 25, 500);

console.log('\nPARÁMETROS POR VALOR Y POR REFERENCIA');
/**
 * Cuando se pasa un tipo primitivo como argumento, en la función
 * se crea una copia que no modifica el valor original.
 * Cuando se pasa un valor por referencia, NO se crea una copia
 * sino que el parámetro sigue apuntando al mismo valor.
 */
const flight = 'LH234';
const daniel = {
  name: 'Daniel Hernández',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    console.log('Check In');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, daniel);
console.log(flight);
console.log(daniel);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(daniel);
checkIn(flight, daniel);
console.log(daniel);

console.log('\nFUNCIONES DE ORDEN SUPERIOR');
/**
 *  Una función de orden superior es aquella que retorna
 * otra función o recibe como parámetro otra función
 *
 * Una función que se pasa como argumento a otra función
 * se llama Callback Function
 */
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Retornar una función
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey!');
greeterHey('Daniel');
greeterHey('Steven');

greet('Hello')('Ale');

const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArrow('Hello!')('Daniel');

console.log('\nMÉTODOS CALL, APPLY Y BIND');
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const book = function(flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
};

// book(23, 'Sarah) NO funciona
// Podemos definir a donde queremos que apunte la palabra this con el método

// Método Call
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 230, 'Mary');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}

book.call(swiss, 583, 'Steve')
console.log(swiss);

// Método Apply: funciona igual que call, pero este recibe un arreglo de argumentos
book.apply(swiss, [583, 'George Cooper']);
book.apply(eurowings, [777, 'Pablo']);
book.apply(lufthansa, [666, 'Lucy']);

// Al método call también se le puede pasar un arreglo y usar el operador spread
book.call(swiss, ...[123, 'Michael']);

// Método bind: también permite establecer a donde debe apuntar this, pero este método no invoca inmediatamente la función sino que crea una nueva donde la palabra this ya está vinculada

// bookEW tiene una nueva función donde this apunta siempre a eurowings
const bookEW = book.bind(eurowings);
// bookLH tiene una nueva función donde this apunta siempre a lufthansa
const bookLH = book.bind(lufthansa);
// bookLX tiene una nueva función donde this apunta siempre a swiss
const bookLX = book.bind(swiss);

bookEW(888, 'Steven Williams');
bookLH(2320, 'Luis');
bookLX(1501, 'Paula');

// Con la función bind se pueden preestablecer los argumentos que queramos
// En este caso, this siempre apuntará a eurowings y el número de vuelo siempre será 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Daniel');

// Bind en Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Otro ejemplo
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxCh = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVATCh = addTaxCh(0.23);
console.log(addVATCh(100));

console.log('\nFUNCIONES AUTOEJECUTABLES');
/**
 * Estas funciones (IIFE), son aquellas que se ejecutan tan pronto
 * como se definen.
 */
// Función que se puede ejecutar varias veces
const runOnce = function() {
  console.log('This will never run again');
}
runOnce();

// Función que se ejecuta inmediatamente y 1 sola vez
(function() {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

console.log('\nCLOSURES');
/**
 * Un Closure hace que una función recuerde todas las variables que existían 
 * en el lugar de nacimiento de la función.
 * Una función siempre tiene acceso al entorno de variable del contexto de
 * ejecución en el que se creó, incluso después de que este desaparezca.
 */

const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

// En este caso, la función booker sigue teniendo acceso a la variable passengerCount
// A pesar de que el contexto de ejecución de esta (secureBooking) ya no existe
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker)

// Ejemplo 1
let f;
const g = function() {
  const a = 22;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
// En este caso f() puede acceder a la variable "a", a pesar de que el contexto
// de ejecución de la función g ya terminó
f();
console.dir(f)
h();
f();
console.dir(f);

// Ejemplo 2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  // En este caso, la función del timer tiene acceso a todas las variables del contexto
  // de ejecución de boardPassengers a pesar de que esté ya terminó
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000 * wait)

  console.log(`Will start boarding in ${wait} seconds`);
}
boardPassengers(180, 3);