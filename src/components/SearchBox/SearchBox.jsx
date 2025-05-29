import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    dispatch(changeFilter(target.value.trim()));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        name="search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
