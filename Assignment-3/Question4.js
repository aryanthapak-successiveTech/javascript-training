//Write a program to print all even number first and then all odd numbers
const { takeInput, closeInput } = require("./Input");

const printEvenAndOddNumbers = async () => {
  let n = parseInt(await takeInput("Enter a number : "));
  closeInput();
  const evenTarget = n % 2 === 0 ? n : n - 1;
  const oddTarget = n % 2 !== 0 ? n : n - 1;
  for (let i = 0; i <= evenTarget; i += 2) {
    if (i == 0) {
      console.log("Even");
    }
    console.log(i);
  }

  for (let i = 1; i <= oddTarget; i += 2) {
    if (i == 1) {
      console.log("Odd");
    }
    console.log(i);
  }
};

printEvenAndOddNumbers();
