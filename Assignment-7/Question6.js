//Implement a function that returns a resolved Promise after a specified delay using async/await.

const delayFunction = async (promise, timer) => {
  try {
    if (!(promise instanceof Promise)) {
      console.error("Expected a promise");
    }

    const result = await delay(promise, timer);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

const delay = (promise, timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const result = await promise;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    }, timer);
  });
};

delayFunction(
  fetch("https://api.github.com/").then((data) => data.json()),
  5000
);
