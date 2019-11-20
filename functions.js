// basic function
function showMessage(message) {
  message = message + " World!";
  console.log(message);
}

showMessage("Hello");

// function with return
function myFunction(value) {
  let newValue = value+16;
  return newValue;
}

let result = myFunction(3)

console.log(result);

// function with two arguments
function addNumber(value1, value2) {
  let newValue = value1+value2;
  return newValue;
}

let result = addNumber(3,5);

console.log(result);
