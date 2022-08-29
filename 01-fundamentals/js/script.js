/*
// TODO VARIABLES
console.log("***** VARIABLES *****");

let firstName = "Venti";
console.log(firstName);

-------------------------------------------------

// TODO TIPOS DE DATOS (Primitivos)
let intValue = 22;
console.log(intValue, typeof intValue);
let floatValue = 2.15;
console.log(floatValue, typeof floatValue);
let boolValue = true;
console.log(boolValue, typeof boolValue);
let strValue = "Hello World!";
console.log(strValue, typeof strValue);
let undeValue;
console.log(undeValue, typeof undeValue);

undeValue = "New value";
console.log(undeValue, typeof undeValue);

console.log(typeof null);

// TODO FORMAS DE DECLARAR VARIABLES

// VARIABLE QUE PUEDE MUTAR
let age = 20;
console.log(age);
age = 22;
console.log(age);

// VARIABLE QUE NO PUEDE MUTAR SU VALOR
const firstName = "Venti";
console.log(firstName);
firstName = 22;

// TODO OPERADORES BÁSICOS
const year = 2021;
const age = year - 1990;
// Resta, Suma, Multiplicación, División, Potenciación
console.log(age, age + 10, age * 2, age / 2, 2 ** 4);

// Concatenar usando +
const firstStr = "Hello";
const lastStr = "World";
console.log(firstStr + " " + lastStr);

// Operador de asignación =
let x = 10 + 5;
x += 10; // x = x + 10
x++; // x = x + 1
console.log(x);

// Operadores de comparación: mayor que, menor que, mayor igual, menor igual, diferente
console.log(10 > 7, 2 < 1, 3 >= 3, 2 <= 3, 4 != 5);

TODO TEMPLATE STRINGS

const firstName = "Kujou";
const lastName = "Sara";
const ageSara = 2021 - 1999;

console.log(
  "I'm " + firstName + " " + lastName + ". I'm " + ageSara + " years old."
);

console.log(`I'm ${firstName} ${lastName}. I'm ${ageSara} years old.`);

// TODO CONDICIONALES

const age = 16;

if (age >= 18) {
  console.log("Sarah can start driving license!");
} else {
  console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
}

const birthYear = 1999;
let century = 0;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// TODO CONVERSIÓN Y COERCIÓN
// Conversion
const inputYear = "2001";
console.log(inputYear, Number(inputYear), String(12.5));
console.log(Number(inputYear) + 10);

// Coercion
console.log("Número " + 22);
console.log("22" - "5" - 7);

// TODO CONVERTIR VALORES A BOOLEANS

// VALORES FALSOS: 0, "", undefined, null, NaN
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(undefined),
  Boolean(null),
  Boolean(NaN)
);

console.log(Boolean(5412), Boolean("Hola"));

const money = 10;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 8;

if (height) {
  console.log("Yes");
} else {
  console.log("No");
}

// TODO OPERADORES LÓGICOS

// IGUALDAD
const age = "18";

if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favNumber = Number(prompt("What's your favorite number?"));
console.log(favNumber, typeof favNumber);

if (favNumber === 22) {
  console.log("Cool! 22 is an amazing number");
} else if (favNumber === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 22 or 7");
}

// DIFERENTE DE
if (favNumber !== 22) console.log("Why not 22?");

// AND, OR, NOT

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}

// TODO SWITCH
const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else {
  console.log("Not a valid day!");
}
*/
// TODO OPERADOR TERNARIO
const age = 15;
const drink = age >= 18 ? "wine 🍷" : "water 💧";

console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(`I like to drink ${drink2}`);
