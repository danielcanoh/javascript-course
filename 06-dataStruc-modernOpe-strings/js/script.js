'use strict';

// /**
//  * TODO DESESTRUCTURACIÓN
//  * Expresión que permite desempacar valores de arreglos o propiedades de
//  * objetos en distintas variables
//  */
// // Forma antigua
// console.log('\nDESESTRUCTURACIÓN EN ARRAYS');
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// // Usando desestructuración
// const [x, y, z] = arr;
// console.log(x, y, z);

// // Si no se quiere tomar un valor, se deja un espacio en blanco
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Intercambiar valores de 2 variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Obtener valores cuando una función retorna un array
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Cuando se tienen arrays anidados
// const nested = [2, 4, [5, 6]];
// const [i, k, [j, h]] = nested;
// console.log(i, k, j, h);

// // Valores por defecto
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// console.log('\nDESESTRUCTURACIÓN EN OBJETOS');
// // Utilizando los mismos nombres de las propiedades
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Utilizando nombres diferentes
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Valores por defecto
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutar variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // Hay que encerrar todo en paréntesis
// console.log(a, b);

// // Objetos anidados
// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   },
// } = restaurant;
// console.log(o, c);

// // Un ejemplo práctico es cuando se tienen muchos parámetros en una función y no se conoce el orden de estos
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });
