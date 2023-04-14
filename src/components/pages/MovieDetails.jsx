import fetchDetailsMovie from 'services/details-movies-api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from 'components/utils/Loader';
import css from './Pages.module.css';

const BASE_URL = 'http://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const results = await fetchDetailsMovie(movieId);
        setMovie(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  const { poster_path, title, genres, overview, release_date, vote_average } =
    movie;
  return (
    <>
      <Link to="/" className={css.backButton}>
        Go Back
      </Link>
      {poster_path && (
        <>
          <div className={css.details}>
            <div>
              <img src={BASE_URL + poster_path} alt={title} />
            </div>
            <div className={css.detailsContainer}>
              <h2>{title}</h2>
              <p>Release Date: {release_date}</p>
              <p>Vote Average: {vote_average.toFixed(2)}</p>
              <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
              <p>Overview: {overview}</p>
            </div>
          </div>
          <div className={css.additionalContainer}>
            <p className={css.additionalP}>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
      {isLoading && <Loader />}
    </>
  );
};

export default MovieDetails;
