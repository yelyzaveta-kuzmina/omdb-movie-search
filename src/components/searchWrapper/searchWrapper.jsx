import Autocomplete from "react-autocomplete";
import classNames from "classnames";
import useMovies from "../../useMovies";
import styles from "./styles.module.scss";

const autocompleteStyle = (isHighlighted) => ({
  background: isHighlighted ? "#EDEDED" : "white",
  boxShadow:
    "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px",
  padding: "0.5em",
  cursor: "pointer",
});

const menuStyle = {
  position: "absolute",
  padding: "1em",
  top: "2.5em",
  left: 0,
  zIndex: 10,
};

const SearchWrapper = ({ className, onMovieSelect }) => {
  const {
    isErrorMessage: errorMessage,
    inputValue,
    setYear,
    fetchedMovies,
    onInputValueChange,
  } = useMovies();
  return (
    <>
      <div className={classNames(className, styles.searchWrapper)}>
        <Autocomplete
          getItemValue={(item) => item.Title}
          items={fetchedMovies || []}
          inputProps={{ placeholder: "Search" }}
          renderItem={(item, isHighlighted) => (
            <div style={autocompleteStyle(isHighlighted)} key={item.imdbID}>
              {item.Title} {item.Year}
            </div>
          )}
          menuStyle={menuStyle}
          value={inputValue}
          onChange={(e) => onInputValueChange(e)}
          onSelect={(value, item) => onMovieSelect(value, item)}
        />
        <input
          className={styles.yearInput}
          placeholder="Year"
          onChange={(event) => setYear(event.target.value)}
        />
        {fetchedMovies.length || !inputValue ? "" : errorMessage}
      </div>
    </>
  );
};

export default SearchWrapper;
