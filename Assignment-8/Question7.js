// Find Error in below questions and rectify them

//for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

for (let i = 0; i < 10; i++) { //Added let to make each iteration block scoped
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
