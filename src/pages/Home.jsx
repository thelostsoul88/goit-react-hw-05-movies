import MoviesItems from 'components/MoviesItems/MoviesItems';
import Loader from 'components/utils/Loader';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import fetchTrendingMovie from 'services/trending-movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      <h1 className="font-bold text-2xl mb-3">Trending Movies</h1>
      <MoviesItems movies={movies} location={location} />
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
