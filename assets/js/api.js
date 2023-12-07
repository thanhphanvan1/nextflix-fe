// import { API_URL } from "./constants/index.js";
// import { handleChangeImage, createNewImageElement } from "./helpers/index.js";
// const apiGetListMovies = async () => {
//   const myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGI5ZGM3NTE4YjgwNzRhMGQ0ZTk4ZTFhMTM5OTc2ZSIsInN1YiI6IjY1NjU4NWE0MTU2Y2M3MDEwY2IzMmRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TqlbjUzoS7OnGs3BUmFikHdp8FC-7krjNB_K4WVAz1M"
//   );
//   myHeaders.append("accept", "application/json");

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(API_URL + "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {

//       result?.results?.forEach(movie => {
//         console.log(movie?.poster_path);
//         createNewImageElement(movie?.poster_path)
//       })
//     })
//     .catch((error) => console.log("error", error));
// };

// console.log("oke");
// apiGetListMovies();
// window.apiGetListMovies = apiGetListMovies;
 'usse strict';

 const api_key = 'ddb9dc7518b8074a0d4e98e1a139976e';
 const imageBaseURL = 'http://image.tmdb.org/t/p/';

//  fetch data from a server using the 'url' and passes
// the result in JSON data to a 'callback' function,
//along wwith an aptional parameter if has 'optionalParameter'

const fetchDataFromServer = function(url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}
export { imageBaseURL, api_key, fetchDataFromServer };