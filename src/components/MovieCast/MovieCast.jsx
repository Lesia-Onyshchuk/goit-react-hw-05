import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastsById } from "../../tmdb-api";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getCastsById(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

  console.log(cast);

  const defaultImage =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!cast) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {cast ? (
        <ul>
          {cast.map((part) => {
            return (
              <li key={part.id}>
                <img
                  src={
                    part.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${part.profile_path}`
                      : defaultImage
                  }
                  alt={part.name}
                  width="120"
                />
                <h4>{part.name}</h4>
                <p>{part.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
}
