import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendMovies } from "../../tmdb-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrendMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
