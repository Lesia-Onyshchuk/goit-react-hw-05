import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const activeClass = ({ isActive }) => {
  return clsx(css.headerLink, isActive && css.headerLinkActive);
};

export default function Header() {
  return (
    <nav>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeClass}>
        Movies
      </NavLink>
    </nav>
  );
}
