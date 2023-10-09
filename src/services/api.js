import axios from 'axios';

const API_KEY = '6e9ce7dd996bed6a19af064a3b70b51c';
const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function fetchTrendingMovies() {
  return (await axios(`${BASE_URL}/trending/all/day`)).data;
}

export async function fetchSearchMovie(query, page = 1) {
  return (await axios(`${BASE_URL}/search/movie?query=${query}&page=${page}`))
    .data;
}

export async function fetchMovieDetails(id) {
  return (await axios(`${BASE_URL}/movie/${id}`)).data;
}

export async function fetchMovieCast(id) {
  return (await axios(`${BASE_URL}/movie/${id}/credits`)).data;
}

export async function fetchMovieReview(id) {
  return (await axios(`${BASE_URL}/movie/${id}/reviews`)).data;
}
