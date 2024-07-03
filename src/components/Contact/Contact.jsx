import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactLi}>
      <div>
        <h3 className={css.name}>
          <BsFillPersonFill size={30} color="black" />
          {name}
        </h3>
        <p className={css.number}>
          <BsFillTelephoneFill size={30} color="black" />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete} type="submit">
        Delete
      </button>
    </li>
  );
};
