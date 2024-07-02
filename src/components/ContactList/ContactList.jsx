import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className={css.lists}>
      {isLoading && !error && <Loader />}
      {error && <p>Oops, something went wrong! Please, try again</p>}

      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact key={id} id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
