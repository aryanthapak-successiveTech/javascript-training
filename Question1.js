//Function Based Approach
let prevAns=undefined
function rand(){
    let newAns=undefined;
    do{
        newAns= Math.floor(Math.random() * 10) + 1;
    }while(prevAns===newAns)
        prevAns=newAns;
    return newAns;
}

console.log(rand());
console.log(rand());