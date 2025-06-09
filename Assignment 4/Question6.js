//Write a program to find sum of an array

const { takeInput, closeInput } = require("./Input");

const sumOfArray = async () => {
  let string = await takeInput("Enter a set of numbers seprated by commas : ");
  closeInput();
  let arr = string.split(",");
  let sum = 0;
  for (let num of arr) {
    if (isNaN(num)) {
      console.log("Expected a number");
      return;
    }
    let temp = Number(num);
    sum = sum + temp;
  }

  console.log(sum);
};

sumOfArray();
