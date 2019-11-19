// if statement

let score = 1000;

if (score > 1000) {
  score = score + 100;
}
else if (score === 1000) {
  console.log("Almost!");
}
else {
  console.log("Nice try!");
}

console.log("Score is:", score);

// case & switch
let state = "TX";

switch (state) {
  case 'NY':
    console.log("New York");
    break;
  case "TX":
    console.log("Texas");
    break;
  /*
  case "TX":
    console.log("Texas");
    console.log("Austin");
    //Allows follow through
  */
  default:
    console.log("Unknown");
    break;
}

// for loop
for (let i=0; i<3; i++) {
  console.log(i);
}

// while loop
let count = 1;
while (count < 5) {
  console.log(count);
  count++;
}
