import { useSelector } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.headerBar}>
      <Navigation />
      {!isRefreshing && isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
