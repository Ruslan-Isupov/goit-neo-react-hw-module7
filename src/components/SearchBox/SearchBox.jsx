import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';


const SearchBox = () => {
   const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleSearch = (event) => {
        dispatch(setFilter(event.target.value));
    };


  return (
    <div>
      <label htmlFor="filter" className={css.labelFilter}> Find contacts by name </label>
      <input
        className={css.inputSearch}
        type="text"
        name="filter"
        value={filter}
        onChange={handleSearch}
        id="filter"
        required
      />
    </div>
  );
};

export default SearchBox