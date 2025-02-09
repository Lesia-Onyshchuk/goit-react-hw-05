import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getSearchMovies } from "../../tmdb-api";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleChangeQuery = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchMovies(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList movies={movies} />
    </div>
  );
}
