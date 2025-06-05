//Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const {takeInput,closeInput}=require("./Input")

const countVariables=async ()=>{
    let string =await takeInput("Enter a String : ");
    let newString="";
    closeInput();
    const charCountMap=new Map();
    for(const ch of string){
        charCountMap.set(ch,(charCountMap.has(ch)?charCountMap.get(ch):0)+1);
    }

    for(const [key,value] of charCountMap.entries()){
        newString=newString+key+value;
    }
    console.log(newString);
}

countVariables()