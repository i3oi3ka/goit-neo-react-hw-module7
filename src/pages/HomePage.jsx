import { ToastContainer } from "react-toastify";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import style from "./HomePage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
