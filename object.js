// define an object
let card = {
  suit: "Diamonds",
  value: "Nine"
}

// Define a function that can act on that object
function changeCard(card) {
  card.suit = "Clubs";
}

changeCard(card)
console.log(card.suit)

// define an array of objects
}
let cards = [
  {
    suit: "Hearts",
    value: "Queen"
  },
  {
    suit: "Spades",
    value: "King"
  }
];

console.log(cards[1].suit);
console.log(cards[0].value);

// built in objects
let result = Math.random();
console.log(result); // random number between 0 and 1

let result = Math.random()*52;
result = Math.trunc(result);
console.log(result); // random number between 0 and 52, truncated decimal places

// dates
let result = new Date().toDateString(); // formatted to shorted date version
console.log(result);

// strings
let result = "Hello World!";
result = result.toUpperCase();
result = result.toLowerCase();
console.log(result)

// Numbers
let reults = 0 / 0;
console.log(Number.isNaN(result)); // check if result is a number
