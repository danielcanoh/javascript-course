'use strict';

const daniel = {
  firstName: 'Daniel',
  year: 2001,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

daniel.greet();
daniel.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
