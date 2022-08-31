'use strict';

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Agregar un objeto como propiedad
  openingHours,

  // También se pueden crear métodos de esta forma
  order(starterIndex, mainIndex) {
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

console.log('\nCICLO FOR OF');
// Recorrer arrays usando el ciclo for-of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  const [index, food] = item;
  console.log(`${index + 1}. ${food}`);
}

console.log('\nOPERADOR DE ENCADENAMIENTO OPCIONAL');
/**
 * TODO ENCADENAMIENTO OPCIONAL
 *El operador de encadenamiento opcional ?. permite leer el valor de 
 una propiedad ubicada dentro de una cadena de objetos conectados sin 
 tener que validar expresamente que cada referencia en la cadena sea válida.
 */

// Con este operador, cuando una propiedad no existe devuelve undefined
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Ejemplo
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of weekdays) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// También funciona con métodos
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// También funciona en arrays
const users = [{ name: 'Daniel', email: 'daniel@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

console.log('\nRECORRER NOMBRES (KEYS), VALORES (VALUES) DE OBJETOS');
/**
 * TODO Se puede crear un array con los nombres de las propiedades,
 * los valores de estas, o ambos de un objeto.
 *
 */

// Nombres de propiedades
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days`);

for (const day of properties) {
  console.log(day);
}

// Valores de propiedades
const values = Object.values(openingHours);
console.log(values);

// Nombres y propiedades juntos (todo el objeto)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
