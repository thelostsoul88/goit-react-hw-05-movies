import { Link, useLocation } from 'react-router-dom';

const MoviesItems = ({ movies, location }) => {
  const locationItem = useLocation();
  const to = location.pathname;
  return (
    <>
      <ol className="list-decimal mb-5">
        {movies.map(movie => (
          <li key={movie.id} className="mb-1 ml-12">
            <Link
              to={to !== '/' ? `${movie.id}` : `movies/${movie.id}`}
              state={{ from: locationItem }}
              className="hover:text-stone-400"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};
export default MoviesItems;
