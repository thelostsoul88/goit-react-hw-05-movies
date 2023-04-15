import fetchDetailsMovie from 'services/details-movies-api';
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from 'components/utils/Loader';
// import css from './Pages.module.css';

const BASE_URL = 'http://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const results = await fetchDetailsMovie(movieId);
        setMovies(results);
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
    movies;
  return (
    <>
      <Link
        to={backLocation.current}
        className="ml-3 hover:text-stone-200 bg-blue-300 p-1 text-white  rounded"
      >
        Go Back
      </Link>
      {poster_path && (
        <>
          <div className="ml-3 mt-3 flex">
            <div>
              <img src={BASE_URL + poster_path} alt={title} />
            </div>
            <div className="flex flex-col gap-8 ml-5 last:max-w-[60%]">
              <h2>{title}</h2>
              <p>Release Date: {release_date}</p>
              <p>Vote Average: {vote_average.toFixed(2)}</p>
              <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
              <p>Overview: {overview}</p>
            </div>
          </div>
          <div className="border-b border-t border-black mt-2 mb-10">
            <p className="ml-5 mt-1 mb-1 font-bold">Additional information</p>
            <ul>
              <li>
                <Link
                  to="cast"
                  className="ml-5 hover:text-green-800 focus:text-green-800"
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="ml-5 hover:text-green-800 focus:text-green-800"
                >
                  Reviews
                </Link>
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
