// console.log("Hello from src/index.js!");


// fetch('http://google.com.br') // VERB: GET
// fetch('http://google.com.br', { method: 'post' }) // VERB: POST


const moviesList = document.getElementById('movies-list');
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit',(event)=>{
  event.preventDefault();

  const keyword = document.getElementById('keyword').value;

  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`

  fetch(url)
    .then( response => response.json() )
    .then((data) => {
      // Aqui você trabalha os dados da API no objeto `data`

      moviesList.innerHTML = '';

      const movies = data.Search;

      movies.forEach((movie)=>{
        // console.log(movie.Title);
        const item = `<li>
                        <h4>${movie.Title} (${movie.Year})</h4>
                        <img src='${movie.Poster}'>
                      </li>`

        moviesList.insertAdjacentHTML('beforeend', item);
      });


    })
});





// Algolia Places

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data.hits[0].locale_names.default[0]); // Look at local_names.default
      place.innerText = data.hits[0].locale_names.default[0];
    });
};

const place = document.getElementById('place');
const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);


