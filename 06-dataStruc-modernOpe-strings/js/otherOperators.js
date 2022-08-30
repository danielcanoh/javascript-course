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
 * TODO CORTO CIRCUITO (&&, ||)
 * Se puede crear lo que se llama un Corto circuito con los operador OR y AND
 */

// El operador OR devolverá el primer valor verdadero que encuentre.
// Se evalúa de izquierda a derecha
// Cuando todos los valores son falsos, devuelve el último
console.log('CORTO CIRCUITO CON OR');
console.log(3 || 'Daniel');
console.log('' || 'Daniel');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 22 || null);

restaurant.numGuests = 14;
// Estas soluciones no funcionarán cuando el número de invitados sea 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// El operador AND devolverá el primer valor falso que encuentre.
// Se evalúa de izquierda a derecha
// Cuando todos los valores son verdaderos, devuelve el último
console.log('\nCORTO CIRCUITO CON AND');
console.log(0 && 'Daniel');
console.log(7 && 'Daniel');
console.log('Hello' && 22 && null && 'D');

// Ejemplo
if (restaurant.orderPizza) {
  restaurant.orderPizza('Queso');
}

restaurant.orderPizza && restaurant.orderPizza('Queso', 'Champiñones');

// El operador Nulo solo toma como falsos los valores Null y undefined
// Devuelve el primer valor verdadero que encuentre, al igual que OR
console.log('\nOPERADOR NULO');
restaurant.numGuests = 0;

const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);

console.log('\nOPERADORES DE ASIGNACIÓN LÓGICA');
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};
