import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={makeLinksClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={makeLinksClass} to="/contacts">
          Contacts
        </NavLink>
      )}
      <h2 className={css.name}>Phonebook</h2>
    </nav>
  );
}
