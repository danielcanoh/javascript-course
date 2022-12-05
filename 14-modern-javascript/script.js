// Importing module
// import { totalPrice as price, totalQuantity, addToCart } from "./shoppingCart.js";
// addToCart('bread', 7);
// console.log(price, totalQuantity);

// Importar todas las exportaciones del módulo a la vez
// import * as ShoppingCart from "./shoppingCart.js";


// console.log(ShoppingCart);
// ShoppingCart.addToCart('bread', 7)

// Importaciones por defecto
import add, { cart } from './shoppingCart.js';
add('bread', 7);
add('pizza', 2);

console.log(cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from '/node_modules/lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 4 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

stateClone.user.loggedIn = false;
console.log(state);
console.log(stateClone);
console.log(stateDeepClone);


class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const daniel = new Person('Daniel');

const sarah = {
  name: 'Sarah',
  friend: {
    name: 'Steve'
  }
}
console.log(sarah.friend?.age);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable'
import 'regenerator-runtime/runtime'