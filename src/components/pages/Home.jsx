import Loader from 'components/utils/Loader';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import fetchTrendingMovie from 'services/trending-movies-api';
import css from './Pages.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovie();
        if (!results.length) {
          toast.error('Movie not found');
          setIsLoading(false);
          return;
        }
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      <ol>
        {movies.map(movie => (
          <li key={movie.id} className={css.homeLi}>
            <Link to={`movies/${movie.id}`} className={css.homeLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
