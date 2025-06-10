//Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const { takeInput, closeInput } = require("./Input");

const reverseWord = (payload) => {
  let revWord = "";
  for (let i = payload.length - 1; i >= 0; i--) {
    revWord += payload[i];
  }
  return revWord;
};
const reverseString = async () => {
  let string = await takeInput("Enter a string to reverse : ");
  closeInput();
  let revString = "";
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    revString += " " + reverseWord(words[i]);
  }

  revString=revString.trim()
  console.log(revString);
};

reverseString();
