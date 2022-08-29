'use strict';

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     value: Number(prompt('Degree celsius:')),
//   };

//   // B) FIND
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const newTemps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < newTemps.length; i++) {
    const curTemp = newTemps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug); // A) IDENTIFY
