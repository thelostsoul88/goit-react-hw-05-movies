import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import fetchReviewsMovie from 'services/reviews-movies-api';
import css from './Pages.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
      }
    })();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReview}>We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
