import { NavLink } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id.toString()}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>Rating: {movie.vote_average}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
