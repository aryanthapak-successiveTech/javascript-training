//Write a program to print all even number first and then all odd numbers using only one iteration
const { takeInput, closeInput } = require("./Input");

const printEvenAndOddNumbers = async () => {
  let evenRes = "", oddRes = "";
  let n = parseInt(await takeInput("Enter a number : "));
  closeInput();
  if(isNaN(n)){
    console.error("Expected a number")
    return;
  }
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      evenRes += i;
      evenRes += "\n";
    } else {
      oddRes += i;
      oddRes += "\n";
    }
  }

  console.log("even :\n" + evenRes);
  console.log("odd :\n" + oddRes);
};

printEvenAndOddNumbers();
