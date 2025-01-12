import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDel = (id) => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              deleteButton={handleDel}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
