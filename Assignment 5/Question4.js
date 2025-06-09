const { takeInput, closeInput } = require("./Input");

const createDeepCopy = async () => {
  try {
    const inputObjectString = await takeInput("Enter a object : ");
    closeInput();
    const inputObject = JSON.parse(inputObjectString);
    const deepCopyString = JSON.stringify(inputObject);
    const deepCopy = JSON.parse(deepCopyString);

    console.log(`Deep Copy = ${deepCopy}`);
  } catch (err) {
    console.error(err);
  }
};

createDeepCopy()

