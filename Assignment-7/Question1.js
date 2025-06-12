//Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const fetchUrl="https://api.github.com/users/Aryanthapak1";

const fetchAndShowData = (url, cb) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => cb(data)).catch(err=>console.log(err));
};

const showData = (data) => {
  console.log(data);
};


fetchAndShowData(fetchUrl,showData);