//. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const { takeInput, closeInput } = require("./Input");

let num1, num2, operator;

const isValid=(operator)=>{
  if(operator=='+' || operator=='-' || operator=='*' || operator=='/'){
    return true;
  }

  return false;
}

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const calculator = async () => {
  num1 = parseInt(await takeInput("Enter a number "));
  num2 = parseInt(await takeInput("Enter a number "));
  operator = await takeInput("Enter a operator from +,*,/,- ");
  closeInput();

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Enter a number");
    return;
  }

  if(!isValid(operator)){
    console.error(`Expected operator from +,*,/,- you entered ${operator}`)
    return;
  }



  switch (operator) {
    case "+": {
      console.log(add(num1, num2));
      break;
    }

    case "-": {
      console.log(subtract(num1, num2));
      break;
    }

    case "*": {
      console.log(multiply(num1, num2));
      break;
    }

    case "/": {
      if (num2 == 0) {
        console.error("Enter non 0 divisor");
      }
      console.log(divide(num1, num2));
      break;
    }

    default: {
      break;
    }
  }
};

calculator();
