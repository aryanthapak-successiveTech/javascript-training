//Create a function that fetches data from multiple APIs in parallel
//and then performs some operation on the combined data, using async/await.

const url1 = "https://api.github.com/emojis";
const url2 = "https://api.github.com/users/Aryanthapak1";
const url3 = "https://api.github.com/repos/Aryanthapak1/quickLibBackend";

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const fetchFromMultiUrls = async (url1, url2, url3) => {
  const combinedResults = await Promise.allSettled([
    fetchData(url1),
    fetchData(url2),
    fetchData(url3),
  ]);

  const extractUrls=combinedResults.map((ele)=>ele["url"]).filter((ele,idx)=>ele!=undefined);
  if(extractUrls.length==0){
    console.log("No urls found");
    return;
  }
  console.log(extractUrls);
};

fetchFromMultiUrls(url1, url2, url3);
