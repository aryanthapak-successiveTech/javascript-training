// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



// First Part
let n = 1;
for (let i = 1; i < 5; i++) {
  let res = "";
  for (let j = 0; j < i; j++) {
    res = res + n + " ";
    n++;
  }
  console.log(res);
}

console.log();
// Second Part

for (let i = 1; i < 5; i++) {
  let res = "";
  for (let j = 0; j < i; j++) {
    res = res + i + " ";
  }
  console.log(res);
}

console.log();

//Third Part

for (let i = 5; i >= 1; i--) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res = res + j + " ";
  }
  console.log(res);
}

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res = res + j + " ";
  }

  console.log(res);
}

