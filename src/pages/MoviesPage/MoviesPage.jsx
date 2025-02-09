import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getSearchMovies } from "../../tmdb-api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleChangeQuery = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchMovies(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  console.log(movies);

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList movies={movies} />
    </div>
  );
}
