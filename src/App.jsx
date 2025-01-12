import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from './redux/contactsThunk';
import { selectLoader, selectError } from './redux/selectors';
import css from "./App.module.css";

function App() {


 const dispatch = useDispatch();
    const loader = useSelector(selectLoader);
    const error = useSelector(selectError);

    useEffect(() => {
      dispatch(fetchContactsThunk());
    }, [dispatch]);


  return (
    <div className={css.mainWrapper}>
      <h2 className={css.title}>Phonebook</h2>
      {loader && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
export default App;
