import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from '../../redux/contactsThunk';
const phoneCheck = /^\+?[1-9]\d{1,14}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The number of characters needs to be at least 3.")
    .max(50, "The number of characters needs to be less than 50")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "The number of characters needs to be at least 3.")
    .matches(phoneCheck, "Invalid phone number format")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const contactFieldId = useId();

  const formSubmitHandler = (contactData, actions) => {
    
    dispatch(addContactThunk(contactData));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={formSubmitHandler}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.labelContact} htmlFor={nameFieldId}>
          Name{" "}
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.labelContact} htmlFor={contactFieldId}>
          Number{" "}
        </label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          maxLength="15"
          id={contactFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
