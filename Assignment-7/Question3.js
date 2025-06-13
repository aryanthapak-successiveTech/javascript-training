//. Convert a callback-based API to a Promise-based API
//  (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

const fetchUrl = "https://api.github.com/users/Aryanthapak1";

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setTimeout(() => {
      console.log(`Data fetched successfully`);
    }, 1000);
  } catch (err) {
    console.error(err);
  }
};

fetchData(fetchUrl);
