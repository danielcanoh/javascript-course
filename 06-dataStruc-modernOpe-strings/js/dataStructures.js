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

// Recorrer arrays usando el ciclo for-of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
    console.log(item);
}

for (const item of menu.entries()) {
    const [index, food] = item;
    console.log(`${index + 1}. ${food}`);
}