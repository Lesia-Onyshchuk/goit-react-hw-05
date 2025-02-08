import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../../tmdb-api";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getReviewsById(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  if (!reviews) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>Any reviews yet</p>
        )}
      </ul>
    </div>
  );
}
