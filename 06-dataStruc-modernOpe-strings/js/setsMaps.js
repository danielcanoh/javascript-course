'use strict';

/**
 * TODO SETS
 * Los sets son otra estructura de datos que permite almacenar valores
 * únicos de cualquier tipo, es decir, no agrega los valores que
 * se repitan.
 * De un Set no se pueden recuperar valores.
 * Se suelen usar para eliminar los valores duplicados de un array
 */
console.log('SETS');
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

// Tamaño de un set
console.log(ordersSet.size);

// Saber si contiene un elemento
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Agregar nuevos elementos
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Eliminar elementos
ordersSet.delete('Risotto');
console.log(ordersSet);

// Recorrer un set
for (const order of ordersSet) {
  console.log(order);
}

// Ejemplo: saber cuantos cargos diferentes hay
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Ejemplo: saber cuantas letras diferentes hay en un String
const letters = new Set('este es un string de prueba');
console.log(letters);

console.log('\nMAPS');
/**
 * TODO MAPS
 * Un mapa es una estructura de datos donde se asignan pares clave-valor.
 * Las claves pueden ser de cualquier tipo.
 */
const rest = new Map();

// Agregar elementos al map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian']);

// Como set devuelve el nuevo mapa, se pueden agregar varios elementos
rest
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

// Obtener un valor
console.log(rest.get('name'));
console.log(rest.get(true));

// Ejemplo
const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Comprobar si tiene una clave
console.log(rest.has('categories'));
console.log(rest.has('hours'));

// Eliminar un elemento del mapa
rest.delete(2);
console.log(rest);

// Tamaño de un mapa
console.log(rest.size);

// Eliminar todos los elementos
rest.clear();
console.log(rest);

// Otra forma de crear un mapa
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convertir objeto a mapa
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
    open: 0,
    close: 24,
  },
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iterar un mapa
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 2;
console.log(question.get(answer === question.get('correct')));

// Convertir mapa a array
console.log([...question]);
