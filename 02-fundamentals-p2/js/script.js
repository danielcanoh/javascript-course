"use strict";

/*
// TODO FUNCIONES

function logger() {
  console.log("My name is Daniel");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// BUG DECLARACIÓN VS EXPRESIÓN DE FUNCIONES

// Declaración
const age1 = calcAge1(2001);

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// Expresión
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(2001);

console.log(age1, age2);

// BUG FUNCIONES FLECHA
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(2001);

console.log(age3);

const yearsUntilretirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilretirement(2001, "Daniel"));
console.log(yearsUntilretirement(1980, "Bob"));

// BUG FUNCIONES INVOCANDO A OTRAS FUNCIONES
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));

// EJEMPLO FUNCIONES
const calcAge = (year) => 2021 - year;

const yearsUntilRetirement = function (birthYear) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1950));

// TODO ARRAYS

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008);
console.log(years);

console.log(friends.length, friends[0]);
console.log(friends[friends.length - 1]); // {Ultimo elemento}

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2021 - 1991, true, friends];
console.log(jonas);

// EXERCISE
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1991, 1984, 2008, 2001];

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];

console.log(age);

// TODO MÉTOD0S BÁSICOS DE LOS ARRAYS

const friends = ["Michael", "Steven", "Steven", "Peter"];
console.log(friends);

// Agregar elementos al final
friends.push("Jay");
console.log(friends);

// Agregar elementos al inicio
friends.unshift("John");
console.log(friends);

// Eliminar el último elemento
friends.pop();
console.log(friends);

// Eliminar el primer elemento
friends.shift();
console.log(friends);

// Saber la posición de un elemento
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("0000"));

// Saber si un elemento está incluido en un array
console.log(friends.includes("Michael"));
console.log(friends.includes("David"));


// TODO OBJETOS

const ventiArray = [
  "Venti",
  "Blue",
  2021 - 1810,
  "Arconte",
  ["Klee", "Jean", "Lisa"],
];

const venti = {
  firstName: "Venti",
  lastName: "Blue",
  age: 2021 - 1810,
  job: "Arconte",
  friends: ["Klee", "Jean", "Lisa", "Amber"],
};
const nameKey = "Name";

// Obtener un valor
console.log(venti);
console.log(venti.firstName, venti["lastName"]);
console.log(venti[`first${nameKey}`], venti[`last${nameKey}`]);

// Agregar propiedades
venti.location = "Teyvat";
venti["twitter"] = "@venti";

console.log(venti);

// Challenge
console.log(
  `${venti.firstName} has ${venti.friends.length} friends, and his best friend is called ${venti.friends[0]}`
);

// BUG MÉTOD0S DE OBJETOS
const venti = {
  firstName: "Venti",
  lastName: "Blue",
  birthYear: 1810,
  job: "Arconte",
  friends: ["Klee", "Jean", "Lisa", "Amber"],
  hasDriversLicense: false,

  // calcAge: function () {
  //   console.log(this);
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "not"} driver's license`;
  },
};

// console.log(venti.calcAge());

// challenge
console.log(venti.getSummary());

// TODO CICLOS
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

//BUG RECORRER ARRAYS
const ventiArray = [
  "Venti",
  "Blue",
  2021 - 1810,
  "Arconte",
  ["Klee", "Jean", "Lisa"],
];
const types = [];

for (let i = 0; i < ventiArray.length; i++) {
  console.log(ventiArray[i], typeof ventiArray[i]);
  types.push(typeof ventiArray[i]);
  // types[i] = typeof ventiArray[i]
}
console.log(types);

const years = [1991, 2007, 1969, 2011];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

// BUG CONTINUE Y BREAK
const ventiArray = [
  "Venti",
  "Blue",
  2021 - 1810,
  "Arconte",
  ["Klee", "Jean", "Lisa"],
];

console.log("***Mostrar solo strings***");
for (let i = 0; i < ventiArray.length; i++) {
  if (typeof ventiArray[i] !== "string") continue;

  console.log(ventiArray[i], typeof ventiArray[i]);
}

console.log("***Terminar el ciclo cuando encuentre un número***");
for (let i = 0; i < ventiArray.length; i++) {
  if (typeof ventiArray[i] === "number") break;

  console.log(ventiArray[i], typeof ventiArray[i]);
}

// BUG RECORRER UN ARRAY DESDE LA ULTIMA POSICIÓN
const ventiArray = [
  "Venti",
  "Blue",
  2021 - 1810,
  "Arconte",
  ["Klee", "Jean", "Lisa"],
  true,
];

for (let i = ventiArray.length - 1; i >= 0; i--) {
  console.log(i, ventiArray[i]);
}

// BUG CICLO DENTRO DE OTRO CICLO
const exercise = ["Pesas🏋️‍♂️", "Correr🏃‍♀️", "Nadar🏊‍♀️"];

for (let i = 0; i < exercise.length; i++) {
  console.log(exercise[i]);

  for (let j = 1; j <= 3; j++) {
    console.log(`Repetición ${j}`);
  }
}

// FIXME CICLO WHILE
console.log("***USANDO CICLO FOR***");
for (let i = 1; i <= 4; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

console.log("***USANDO CICLO WHILE***");

let count = 1;

while (count <= 4) {
  console.log(`Lifting weights repetition ${count} 🏋️‍♂️`);
  count++;
}
*/
let dice = 0;
// console.log(dice);

while (dice !== 6) {
  dice = Math.trunc(Math.random() * (6 - 1 + 1)) + 1;
  console.log(`You rolled a ${dice}`);
}
