//5. Write a function expression that takes in two numbers and returns their sum.

//Function Approach
let num1=parseInt(prompt("Enter a number"));
let num2=parseInt(prompt("Enter a number"));

const add=function (num1,num2){
    if(isNaN(num1) ||isNaN(num2)){
        console.error("enter a number")
    }
    return num1+num2;
}

console.log(add(num1,num2))

//Arrow Function Approach

const sum=(num1,num2)=>{
    if(isNaN(num1) ||isNaN(num2)){
        console.error("enter a number");
    }
    return num1+num2;
};

console.log(sum(num1,num2));