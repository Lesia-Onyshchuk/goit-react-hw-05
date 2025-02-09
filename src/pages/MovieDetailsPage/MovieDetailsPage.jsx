import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesById } from "../../tmdb-api";
// import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const data = await getMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  const defaultImage =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavLink to={goBackUrl.current}>Go back</NavLink>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImage
        }
        alt={movie.title}
        width="240"
      />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      {movie.genres.length !== 0 ? (
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
