/**
 * 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
 * 
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`New speed ${this.make}: ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`New speed ${this.make}: ${this.speed} Km/h`);
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
  }
}

const car1 = new EVCl('Rivian', 120, 23);

console.log(car1);
car1.chargeBattery(90);
console.log(car1);
car1.brake();
car1.accelerate();