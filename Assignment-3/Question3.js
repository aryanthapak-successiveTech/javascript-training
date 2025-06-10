// Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *


let x = 5;

for (let i = 1; i <= x; i++) {
  let res = "";
  

  for (let j = 1; j <= x - i; j++) {
    res += " ";
  }
  

  for (let j = 1; j <= i; j++) {
    res += "* ";
  }
  
  console.log(res);
}

for (let i = x - 1; i >= 1; i--) {
  let res = "";

  for (let j = 1; j <= x - i; j++) {
    res += " ";
  }
  

  for (let j = 1; j <= i; j++) {
    res += "* ";
  }
  
  console.log(res);
}


