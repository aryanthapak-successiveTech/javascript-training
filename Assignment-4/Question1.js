//Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const { takeInput, closeInput } = require("./Input");

const removeDuplicates = async () => {
  let string = await takeInput("Enter a string : ");
  let newString = "";
  closeInput();
  const uniqueChars = new Set();

  for (const ch of string) {
    const lowerCase = ch.toLowerCase();
    const upperCase = ch.toUpperCase();
    if (!uniqueChars.has(lowerCase) && !uniqueChars.has(upperCase)) {
      newString += ch;
    }
    uniqueChars.add(ch);
  }

  console.log(newString);
};

removeDuplicates();
