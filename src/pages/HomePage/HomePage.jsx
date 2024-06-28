import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <PageTitle>To get started, please log in!</PageTitle>
      <img src="" alt="phonebook" />
    </div>
  );
}
