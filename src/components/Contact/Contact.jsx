import css from "./Contact.module.css";
import contactPerson from "../../assets/numberPerson.svg";
import numberPerson from "../../assets/contactPerson.svg";

const Contact = ({ id, name, number, deleteButton }) => {
  return (
    <div className={css.contactWrapper}>
      <div className={css.box}>
          <div className={css.boxsvg}>
            <img src={contactPerson} alt={name} className={css.icon} />
            <p className={css.contactName}>{name}</p>
          </div>
         <div className={css.boxsvg}>
            <img src={numberPerson} alt={number} className={css.icon} />
           <p className={css.contactNumber}>{number}</p>
          </div>
        </div>
      <button
        type="button"
        onClick={() => {
          deleteButton(id);
        }}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact
