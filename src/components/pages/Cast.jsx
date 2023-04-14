import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import css from './Pages.module.css';
import fetchCastMovie from 'services/cast-movies-api';

const BASE_URL = 'http://image.tmdb.org/t/p/w154';
const defaultImg =
  'https://img.freepik.com/premium-vector/profile-icon-male-avatar-man-portrait-casual-person-silhouette-face-flat-design-vector-illustration_750364-603.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovies, setCastMovies] = useState([]);
  //   const [disable, setDisable] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await fetchCastMovie(movieId);
        setCastMovies(cast);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
      }
    })();
    // setDisable(true);
  }, [movieId]);

  return (
    <>
      <ul className={css.castList}>
        {castMovies.map(({ name, profile_path, id }) => (
          <li key={id} className={css.castItem}>
            <img
              width="154"
              height="225"
              src={profile_path ? BASE_URL + profile_path : defaultImg}
              alt={name}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
      {/* {disable && <Link to="">Close Cast</Link>} */}
    </>
  );
};
export default Cast;
