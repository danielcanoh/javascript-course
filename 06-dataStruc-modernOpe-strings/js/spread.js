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

/**
 * TODO OPERADOR SPREAD
 * Este operador permite expandir un elemento iterable (Arrays, strings,
 * maps, sets). Los Objetos NO son iterables.
 * Desempaca todos los valores separados por comas
 */
console.log('\nOPERADOR SPREAD');
// Crear un nuevo array a partir de otro
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copiar un array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Unir 2 o más arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread con strings
const str = 'Daniel';
const letters = [...str, ' ', 'C.'];
console.log(letters);

// Pasar varios argumentos a una función
const ingredients = ['Salsa', 'Queso', 'Pollo'];
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Forma antigua
restaurant.orderPasta(...ingredients);

// Spread en objetos
const newRestaurant = { foundedIn: 2001, ...restaurant, founder: 'Daniel' };
console.log(newRestaurant);

// Copiar objetos
// Si modificamos la copia, NO se modifica el original
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
