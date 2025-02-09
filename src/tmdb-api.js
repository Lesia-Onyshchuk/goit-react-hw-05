import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TREND_URL = "/trending/movie/day?language=en-US";
const SEARCH_URL = "/search/movie?include_adult=false&language=en-US&page=1";
const KEY_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGZhMTY5M2I5ZDE4MmVmOGZmY2M4MTVmODA5MWQ3NSIsIm5iZiI6MTczODk0NzM2Ny4wNzEsInN1YiI6IjY3YTYzYjI3NGQ1MzZjYjkzMjY2ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNBU1ySOjevLflQlIWPvmHn6N4eQ6rb23DgoKO96Gio";

const options = {
  headers: {
    Authorization: `Bearer ${KEY_API}`,
  },
};

export async function getTrendMovies() {
  const { data } = await axios.get(`${BASE_URL}${TREND_URL}`, options);
  console.log(data.results);
  return data.results;
}

export async function getSearchMovies(query) {
  const { data } = await axios.get(
    `${BASE_URL}${SEARCH_URL}&query=${query}`,
    options
  );
  console.log(data.results);
  return data.results;
}

export async function getMoviesById(movieId) {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  console.log(data);
  return data;
}

export async function getReviewsById(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  console.log(data.results);
  return data.results;
}

export async function getCastsById(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );
  console.log(data.cast);
  return data.cast;
}

console.log(getSearchMovies("enemy"));
