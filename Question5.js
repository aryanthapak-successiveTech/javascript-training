//Function Approach
let num1=parseInt(prompt("Enter a number"));
let num2=parseInt(prompt("Enter a number"));
function add(num1,num2){
    return num1+num2;
}

console.log(add(num1,num2))

//Arrow Function Approach

const sum=(num1,num2)=>num1+num2;

console.log(sum(num1,num2));