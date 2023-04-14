import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <div className={css.navContainer}>
      <nav>
        <NavLink to="/" className={css.navHome}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navMovie}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
