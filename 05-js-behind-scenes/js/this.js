'use strict';

console.log('*** THIS COMO MÉTODO DE UN OBJETO ***');
const daniel = {
  firstName: 'Daniel',
  age: 21,

  info: function () {
    console.log(this);
  },
};

const sarah = {
  firstName: 'Sarah',
  age: 26,
};

sarah.info = daniel.info;

daniel.info();
sarah.info();

console.log('*** THIS EN UNA FUNCIÓN SIMPLE ***');

function thisFunction() {
  console.log(this);
}

thisFunction();

console.log('*** THIS EN UNA FUNCIÓN DE DETECTOR DE EVENTOS ***');

const title = document.getElementById('title');
title.addEventListener('click', () => {
  console.log(this);
});

// console.log('*** THIS EN UNA ARROW FUNCTION ***');

// const thisArrow = () => console.log(this);
// thisArrow();
