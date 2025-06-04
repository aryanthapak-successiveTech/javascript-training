//Write a function to take input(age, name, phone no.) from user and display it

let age = Number(prompt("Enter age"));
let userName = prompt("Enter name");
let phone_no = prompt("Enter Phone Number");

// Function Based Approach
function showDetails() {
  if (age < 0 && age > 100) {
    console.error(`We expected an age between 1 to 100 you entered ${age}`);
    return;
  }

  if (phone_no.length !== 7 && phone_no.length !== 10) {
    console.error(
      `We expected mobile number either 7 digits or 10 digits you entered ${phone_no.length} digits`
    );
    return;
  }

  if (!userName.match(/^[A-Za-z-]+$/)) {
    console.error("Not a valid Name only characters and - is allowed");
    return;
  }

  console.log("Age : ", age);
  console.log("Name : ", userName);
  console.log("Phone Number : ", phone_no);

  let body = document.getElementsByTagName("body")[0];
  let nameHeader = document.createElement("h1");
  nameHeader.textContent = `Name : ${userName}`;
  body.appendChild(nameHeader);

  let ageHeader = document.createElement("h1");
  ageHeader.textContent = `Age : ${age}`;
  body.appendChild(ageHeader);

  let phoneHeader = document.createElement("h1");
  phoneHeader.textContent = `Phone Number : ${phone_no}`;
  body.appendChild(phoneHeader);
}

showDetails();
