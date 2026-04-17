import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}

export default SearchBox;
