import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactSchema = object().shape({
    name: string().min(3).max(50).required("Required"),
    number: string()
      .min(9, "Format number must be: '123-45-78'")
      .max(9, "Format number must be: '123-45-78'")
      .required("Required"),
  });

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ id: nanoid(), name, number }));
    toast("Contact saved");
    actions.reset;
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        validateOnMount={true}
      >
        <Form className={style.form}>
          <label className={style.label}>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={style.label}>
            Number
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={style.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
