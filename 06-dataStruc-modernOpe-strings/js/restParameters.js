'use strict';

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    console.log(`Other ingredients: `, otherIngredients);
  },
};

/**
 * TODO Operador Rest
 * Este operador permite empacar un número indefinido de valores en otro elemento iterable
 * El Spread se usa al lado derecho del igual
 * El Rest se usa al lado izquierdo
 */
// OPERADOR REST CUANDO SE HACE DESESTRUCTURACIÓN
// Asignar el resto de valores a la variable others
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Se pueden combinar el Rest y el Spread
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest en objetos
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// OPERADOR REST EN FUNCIONES
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('Total: ', sum);
};
add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 10, 15);

const x = [22, 14, 100, 2];
add(...x);

restaurant.orderPizza('Queso', 'Salsa', 'Champiñones', 'Piña', 'Chile');
restaurant.orderPizza('Queso');
