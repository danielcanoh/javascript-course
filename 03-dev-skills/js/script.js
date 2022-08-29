'use strict';

/**
 TODO PROBLEM
 We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error".
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What's temp amplitude? Ans: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array.
// - Find min value in temp array
// - Subtract min from max (amplitude) an return it

const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 9999;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding
// - Merge two arrays

// 2) How to merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const newTemps = t1.concat(t2);
  let max = 0;
  let min = 9999;
  for (let i = 0; i < newTemps.length; i++) {
    const curTemp = newTemps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

console.log(calcTempAmplitudeNew([-10, 4, 8], [20, 3, 7]));
