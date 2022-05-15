require('.env').config();
var api_key = process.env.API_KEY;
let URL_API= "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=fr-FR'";
const card = document.querySelector('.content');
const spinner = document.querySelector('#spinner');

//yy-mm-dd
const getYearFromDate = (date) => {
  let year= date.split('-').shift();
  return year;
};
var genres_movies= '{ "genres": [ { "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" } ] }';

const getNameGensFormId = (idGen) => {
  let genreName='';
  let obj = JSON.parse(genres_movies);
  for(let i=0;i<obj.genres.length;i++){
    if(idGen==obj.genres[i].id ){
      genreName=obj.genres[i].name;
      break;
    }
  }
  return genreName;
};

var DataBase = require("./DataBase");
var Api = require("./Api");

var test = DataBase.GetLikesData();
window.alert(test);
console.write(test);

function printFollowers(test) {
    document.getElementById('printFollower').innerHTML = test;
    console.log(test); // you can do print followersSum wherever you want
}

const getGenNames = (gensArrayIds) => {
  let gensName='';
  const sizeGenresArray = gensArrayIds.length;
  for(let i=0;i<sizeGenresArray;i++){
    gensName+=", "+getNameGensFormId( gensArrayIds[i] );
    
  }
  gensName = gensName.substr(1);
  return gensName;
};

function mapCards(movies){
  const html = movies.map(movie => {
    let title = movie.title || movie.name;
    let isMovieOrTv=(movie.title)?'movie':'tv';
    return `
      <div class="card" >
        <div class="frontWeb" style="background-image: url(//image.tmdb.org/t/p/original${movie.poster_path});"> 
          <p>${title}</p>
        </div>

        <div class="back">
          <div>
            <div class="release_date">${title} <span>(${getYearFromDate(movie.release_date)})</span></div>
            <div class="movie_gens">${getGenNames(movie.genre_ids)}</div>
            <div>Note : ${movie.vote_average}</div>
            <button class="button" onclick="ModifyMovieLikes(${GetLikesData}, ${movie.id})">Like</button>
            <a>${GetLikesData}</a>
            <p class="overview">${movie.overview}</p>
            <a target="_blank" href="https://www.themoviedb.org/${isMovieOrTv}/${movie.id}" class="button">Details</a>
          </div>
        </div>
      
      console.log(ModifyMovieLikes(0, 675353))
      </div>
    `;
  }).join('');
  card.innerHTML= 
    `<h1 class="heading">Films</h1>`;
  card.innerHTML+= html;
}


async function fetchMovies(urlEndpoint) {
  let data;
  try {
    const response = await fetch(urlEndpoint);
    data = await response.json();

    //return (data);
  } catch (error) {
    console.log(error);
  }
  // return data.data;
  return data.items || data.results;
}

(async () => {
  const movies = await fetchMovies(URL_API);
   spinner.setAttribute("hidden", "");
  mapCards(movies);
})();

const API_URL_DEV = 'http://localhost:3000/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = API_URL_DEV + 'discover/1';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');