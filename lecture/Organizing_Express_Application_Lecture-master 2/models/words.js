//Dictionary words
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

// Object containing the Data
let wordObject = {};


//Functions
function randomWordGenerator() {
  wordObject.words = [];
  wordObject.words.push(words[Math.floor(Math.random() * words.length)]);
};

function randomWordListGenerator() {
  wordObject.words = [];
  for (var i = 0; i < 15; i++) {
    let rng = Math.floor(Math.random() * words.length);
    wordObject.words.push(words[rng]);
  };
};

//Export my Model
module.exports = {
  object: wordObject,
  randomWordGenerator: randomWordGenerator,
  randomWordListGenerator: randomWordListGenerator
};
