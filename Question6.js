// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

let num = parseInt(prompt("Enter a number"));

const checkEven = function (num) {
  if (isNaN(num)) {
    console.error("Enter a number");
    return;
  }
  
  return num % 2 === 0;
};

console.log(checkEven(num));

const isEven = (num) => {
  if (isNaN(num)) {
    console.error("Enter a number");
    return;
  }

  return num % 2 === 0;
};

console.log(isEven(num));
