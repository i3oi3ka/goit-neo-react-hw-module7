import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styless from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    toast(`Contact deleteded ${id}`);
  };

  return (
    <>
      <li className={styless.container}>
        <div className={styless.item}>
          <p>
            <FaUser size="24" />
            {contact.name}
          </p>
          <p>
            <FaPhoneAlt size="24" />
            {contact.number}
          </p>
        </div>
        <button
          type="button"
          className={styless.button}
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
