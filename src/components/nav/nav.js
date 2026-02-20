import { NavLink } from "react-router-dom";
import { FaFilm, FaPlusCircle } from "react-icons/fa";
import "./nav.css";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">🎬 MovieApp</div>

      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
            end
          >
            <FaFilm className="nav__icon" />
            FILMY
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "nav__link active" : "nav__link"
            }
          >
            <FaPlusCircle className="nav__icon" />
            DODAJ FILM
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
