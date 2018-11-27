const assert = require('assert');

class Car {
  constructor() {

  }

  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

// Commenting for time being. Uncomment to run the tests.

// let car ;
//
// beforeEach(() => {
//   car = new Car();
// });
//
// describe('Car Tests', () => {
//
//   it('can park', () => {
//     assert.equal(car.park(),'stopped');
//   });
//
//   it('can drive', () => {
//     assert.equal(car.drive(),'vroom');
//   });
//
// });
