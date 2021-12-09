import Autocomplete from "react-autocomplete";
import classNames from "classnames";
import styles from "./styles.module.scss";

const SearchWrapper = ({
  className,
  fetchedMovies,
  inputValue,
  onInputValueChange,
  onMovieSelect,
}) => {
  return (
    <div className={classNames(className, styles.searchWrapper)}>
      <Autocomplete
        getItemValue={(item) => item.Title}
        items={fetchedMovies || []}
        inputProps={{ placeholder: "Search" }}
        renderItem={(item, isHighlighted) => (
          <div
            style={{
              background: isHighlighted ? "#EDEDED" : "white",
              boxShadow:
                "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px",
              padding: "0.5rem",
              cursor: "pointer",
            }}
            key={item.imdbID}
          >
            {item.Title} {item.Year}
          </div>
        )}
        menuStyle={{
          position: "absolute",
          padding: "1rem",
          top: "2.5rem",
          left: 0,
          zIndex: 10,
        }}
        value={inputValue}
        onChange={(e) => onInputValueChange(e)}
        onSelect={(value, item) => onMovieSelect(value, item)}
      />
    </div>
  );
};

export default SearchWrapper;
