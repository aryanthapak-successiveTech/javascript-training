let age=prompt("Enter age");
let userName=prompt("Enter name");
let phone_no=prompt("Enter Phone Number");

// Function Based Approach
function showDetails(){
    console.log("Age : ",age);
    console.log("Name : ",userName);
    console.log("Phone Number : ",phone_no);
}

let body=document.getElementsByTagName("body")[0];
let nameHeader=document.createElement("h1");
nameHeader.textContent=`Name : ${userName}`;
body.appendChild(nameHeader);

let ageHeader=document.createElement("h1");
ageHeader.textContent=`Age : ${age}`;
body.appendChild(ageHeader);

let phoneHeader=document.createElement("h1");
phoneHeader.textContent=`Phone Number : ${phone_no}`;
body.appendChild(phoneHeader);

showDetails();
