import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import fetchSearchMovie from 'services/search-movies-api';
import MoviesItems from 'components/MoviesItems/MoviesItems';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        const { results } = await fetchSearchMovie(query);
        if (!results.length) {
          toast.info('There are no movies for your request.');
          return;
        }
        setMovies(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
      }
    })();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.text.value === '') {
      toast.error('Please enter a movie name');
      return;
    }
    const el = e.currentTarget;
    setSearchParams({
      query: el.elements.text.value.trim(),
    });
    el.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Search films"
          autoComplete="off"
          name="text"
          className="ml-7 border border-blue-300 p-1 rounded mb-5 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-300 p-1 ml-2 text-white hover:text-stone-200 rounded"
        >
          search
        </button>
      </form>
      {movies && <MoviesItems movies={movies} location={location} />}
    </>
  );
};

export default Movies;
