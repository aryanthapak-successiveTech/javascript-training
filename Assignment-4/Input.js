const rl=require("readline");

const prompt=rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

exports.takeInput=(query)=>{
    return new Promise((resolve,reject)=>{
        prompt.question(query,(data)=>{
            resolve(data);
        })
    })
}

exports.closeInput=()=>{
    prompt.close();
}