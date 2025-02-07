import axios from "axios";
import "./App.css";

function App() {
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGZhMTY5M2I5ZDE4MmVmOGZmY2M4MTVmODA5MWQ3NSIsIm5iZiI6MTczODk0NzM2Ny4wNzEsInN1YiI6IjY3YTYzYjI3NGQ1MzZjYjkzMjY2ZWQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNBU1ySOjevLflQlIWPvmHn6N4eQ6rb23DgoKO96Gio",
    },
  };

  axios
    .get(url, options)
    .then((response) => console.log(response.data.results))
    .catch((err) => console.error(err));

  return;
}

export default App;
