import { Link, useLocation } from 'react-router-dom';
const BASE_URL = 'http://image.tmdb.org/t/p/w500/';
const defaultImg =
  'https://yt3.googleusercontent.com/pL_VB56ZIus1L_ORk679enHohInq0pjCweZ4vgqS5yM4KB0mAp8DEznP94MdSIQpSM3-5uE_lQ=s900-c-k-c0x00ffffff-no-rj';

const MoviesItems = ({ movies, location }) => {
  const locationItem = useLocation();
  const to = location.pathname;
  return (
    <>
      <ul className="mb-5 flex flex-wrap">
        {movies.map(({ id, poster_path, title }) => (
          <li key={id} className="mb-3 ml-12 border border-black text-center">
            <img
              src={poster_path ? BASE_URL + poster_path : defaultImg}
              alt={title}
              width="200"
            ></img>
            <Link
              to={to !== '/' ? `${id}` : `movies/${id}`}
              state={{ from: locationItem }}
              className="hover:text-stone-400"
            >
              <p className="ml-5 mt-2 w-40 mb-3">{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesItems;
