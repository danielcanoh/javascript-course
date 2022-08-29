'use strict';

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Daniel';
// let job = 'Student';
// const year = 2001;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 10;
// let y = 2;
// const z = 3;

// console.log(window.x);
// console.log(window.y);

function deleteShoppingCart() {
  console.log('All products deleted');
  console.log(this);
}

deleteShoppingCart();

const daniel = {
  firstName: 'Daniel',
  age: 22,

  info: function () {
    console.log(this);
  },
};

daniel.info();
