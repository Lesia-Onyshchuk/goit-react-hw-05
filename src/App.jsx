import axios from "axios";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

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
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
