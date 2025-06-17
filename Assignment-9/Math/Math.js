exports.add=(num1,num2)=>{
    if(isNaN(num1) || isNaN(num2)){
        console.error("Expected a number");
        return;
    }

    return num1+num2;
}

exports.subtract=(num1,num2)=>{
    if(isNaN(num1) || isNaN(num2)){
        console.error("Expected a number")
        return;
    }

    return num1-num2;
}