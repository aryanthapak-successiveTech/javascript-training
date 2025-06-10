//Write a program to convert given string to upperCase OR lowerCase

const { takeInput, closeInput } = require("./Input");

const convertToLowerAndUpperCase = async () => {
  let string = await takeInput("Enter a string : ");
  closeInput();
  let lowerCaseString = string.toLowerCase();
  let upperCaseString = string.toUpperCase();
  console.log(lowerCaseString);
  console.log(upperCaseString);
};

convertToLowerAndUpperCase();
