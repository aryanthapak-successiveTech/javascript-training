// Function Approach

function processCart(){
    console.log("Process the Cart");
}

function payment(processCart){
    processCart();
    console.log("Perform Payment");
}

payment(processCart);

// Array Function Approach

const addItem=()=>{
    console.log("Item Added");
}

const checkCart=(addItemFunc)=>{
    addItemFunc();
    console.log("Show Items")
}

checkCart(addItem);