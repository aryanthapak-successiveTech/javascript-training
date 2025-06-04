//Write a program to display prime numbers from 1 to 50

const { takeInput, closeInput } = require("./Input");
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

const printPrime = async () => {
  let n = parseInt(await takeInput("Enter a number : "));
  closeInput();
  if (isNaN(n)) {
    console.error("Expected a number");
    return;
  }

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

printPrime();
