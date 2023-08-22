import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c67fe955046fda94f580f78044a00ac8';

export async function fetchTrending() {
  return axios
    .get(`${URL}trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`)
    .then(response => {
      console.log(response.data.results); // Добавьте эту строку
      return response.data.results;
    });
}

export async function fetchMoviesByKeyWord(query) {
  return axios
    .get(
      `${URL}search/movie?api_key=${API_KEY}&page=1&query=${query}&language=en-US`
    )
    .then(response => response.data.results);
}

export async function fetchMoviesById(id) {
  return axios
    .get(`${URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

export async function fetchCast(id) {
  return axios
    .get(`${URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
}

export async function fetchReviews(id) {
  return axios
    .get(`${URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.results);
}
