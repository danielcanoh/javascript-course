'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log('STRINGS PART 1');
// Se puede acceder a los caractares de un String como en los arrays
console.log(plane[0]);

// Longitud de un string
console.log(airline.length);

// Posición de la primera ocurrencia que encuentre
console.log(airline.indexOf('P'));

// Posición última ocurrencia
console.log(airline.lastIndexOf('P'));

// Posición substring
console.log(airline.indexOf('Portugal'));

// Extraer un substring
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' '))); // Primera palabra
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Última palabra
console.log(airline.slice(1, -1)); // Con valores negativos se va hasta el final del string
console.log(airline.slice(-3));

// Ejemplo
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'E' || s === 'B') console.log('You got the middle seat 😢');
  else console.log('You got lucky 😃');
};

checkMiddleSeat('11B');
checkMiddleSeat('11D');

console.log('\nSTRINGS PART 2');
// Convertir string a mayúscula
console.log(airline.toUpperCase());

// Convertir string a minúscula
console.log(airline.toLowerCase());

// Eliminar espacios en blanco al inicio y al final
// Se puede usar trimStart y trimEnd para eliminar solo al inicio o al final
console.log('   Daniel    '.trim());

// Reemplazar una parte del String
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceGB, priceUS);

// Reemplazar todas las ocurrencias que encuentre
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Saber si un string está incluido en otro
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));

console.log('\nSTRINGS PART 2');
// Crear un array a partir de un string (se debe pasar la separación)
const str = 'a+very+nice+string';
console.log(str.split('+'));

const [firstName, lastName] = 'Daniel Hernández'.split(' ');
console.log(firstName, lastName);

// Convertir un array a string
const fullName = ['Mr.', firstName, lastName.toUpperCase()];
console.log(fullName.join(' '));

// Ejemplo
const capitalizeName = function (name) {
  const fullName = name.split(' ');
  const newName = [];
  for (const word of fullName) {
    newName.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(newName.join(' '));
};

capitalizeName('daniel cano hernández');
capitalizeName('corey taylor');

// Agregar un padding a un string
console.log('Daniel'.padStart(20, '*').padEnd(30, '*'));

// Ejemplo
const maskCreditCard = function (number) {
  const str = String(number);
  const encryptedNumber = str.slice(-4).padStart(str.length, '*');
  console.log(`Card number: ${encryptedNumber}`);
};

maskCreditCard(1234567899875461);
