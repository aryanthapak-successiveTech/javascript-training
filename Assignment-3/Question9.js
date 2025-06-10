const { takeInput, closeInput } = require("./Input");

const printFibonacci = async () => {
  let num = parseInt(await takeInput("Enter the nth Term : "));
  closeInput();
  if (isNaN(num)) {
    console.error("Expected a number");
    return;
  }
  let num1 = 0;
  let num2 = 1;
  for (let i = 1; i <= num; i++) {
    console.log(num2);
    let num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
};

printFibonacci();
