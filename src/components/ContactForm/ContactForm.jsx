import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
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
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="number" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
