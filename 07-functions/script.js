'use strict';

/**
 * TODO PARÁMETROS POR DEFECTO
 * Los parámetros por defecto se aplican cuando no pasamos un argumento
 * que la función espera.
 */
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 25, 500);
