'use strict';

// Función en el Scope Global
function calcAge(birthYear) {
  const age = 2037 - birthYear; // Variable en el Scope de la función

  // Función en Scope  local de la función calcAge
  function printAge() {
    // Variable en el Scope local de printAge
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Variable en el Scope local del bloque if
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // Scope de bloque solo en modo estricto
      function add(a, b) {
        console.log(a + b);
      }
    }

    add(2, 3);

    console.log(millenial);
  }
  printAge();
  // console.log(millenial);
  return age;
}

const firstName = 'Daniel'; // Variable Global
calcAge(1990);
