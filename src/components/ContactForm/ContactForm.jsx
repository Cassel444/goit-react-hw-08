import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormSchema } from "../../schemas/contactFormSchema.js";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name Surname"
          />
        </label>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="tel"
            name="number"
            placeholder="000-00-00"
          />
        </label>
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
