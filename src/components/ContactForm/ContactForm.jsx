import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import contactFormSchema from "../../schemas/contactFormSchema.js";

function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={(contact, actions) => {
        dispatch(addContact({ name: contact.name, number: contact.number }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
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
export default ContactForm;
