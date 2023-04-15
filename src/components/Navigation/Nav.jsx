import { NavLink } from 'react-router-dom';
// import css from './Nav.module.css';

const Nav = () => {
  return (
    <div className="p-5 mb-3 shadow-md">
      <nav className="ml-7">
        <NavLink
          to="/"
          className="mr-5 hover:text-red-900 focus:text-red-900 text-2xl"
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="hover:text-red-900 focus:text-red-900 text-2xl"
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
