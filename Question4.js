// Write a function expression that takes in a number and returns its square.

// Function Approach
let num=parseInt(prompt("Enter a number"))

const square=function (num){
    if(isNaN(num)){
        console.error("enter a number")
    }
    return num*num;
}

console.log(square(num));

//Arrow Function Approach

const findSquare=(num)=>{
    if(isNaN(num)){
        console.error("enter a number")
    }
    return num*num;
};

console.log(findSquare(num));
