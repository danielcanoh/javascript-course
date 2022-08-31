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
const flight = "LH234";
const daniel = {
  name: "Daniel Hernández",
  passport: 123456789
}

const checkIn = function(flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if(passenger.passport === 123456789) {
    console.log("Check In");
  } else {
    console.log("Wrong passport!");
  }
}

checkIn(flight, daniel);
console.log(flight);
console.log(daniel);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

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
const oneWord = function(str) {
  return str.replaceAll(' ','').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Retornar una función
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}
const greeterHey = greet('Hey!');
greeterHey("Daniel");
greeterHey("Steven");

greet('Hello')('Ale');

const greetArrow = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
}

greetArrow('Hello!')('Daniel');