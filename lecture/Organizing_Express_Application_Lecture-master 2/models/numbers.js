// Object containing Data
let numberObject = {};


// Functions
function randomNumberGenerator() {
  numberObject.number = [];
  numberObject.number = Math.floor(Math.random() * 1000000);
};


function randomNumberListGenerator() {
  numberObject.number = [];
  for (var i = 0; i < 15; i++) {
    let rng = Math.floor(Math.random() * 1000000);
    numberObject.number.push(rng);
  };
};

// Export my Data Object
module.exports = {
  object: numberObject,
  randomNumberGenerator: randomNumberGenerator,
  randomNumberListGenerator: randomNumberListGenerator
};
