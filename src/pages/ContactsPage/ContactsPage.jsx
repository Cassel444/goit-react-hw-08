import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import { selectError, selectLoading } from "../../redux/contacts/slice";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css"


export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <b>Ooops... something went wrong</b>}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
