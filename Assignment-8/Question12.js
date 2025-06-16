//async function getData() {
// setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });

async function getData() {
  return new Promise((resolve, reject) => {  //Added a promise so .then chaining can work
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
getData().then(function (data) {
  console.log(data);
});
