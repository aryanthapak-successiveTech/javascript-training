// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const { takeInput, closeInput } = require("./Input");

const convertToCamelCase = async () => {
  let string = await takeInput("Enter a string : ");
  closeInput();

  const words = string.split(" ");
  let camelCaseString = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    camelCaseString =
      camelCaseString + words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  console.log(camelCaseString);
};

convertToCamelCase();
