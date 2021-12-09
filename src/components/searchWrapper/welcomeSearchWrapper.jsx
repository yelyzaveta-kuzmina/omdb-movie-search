import styles from "./styles.module.scss";

const WelcomeSearchWrapper = ({ children, onMovieSelect }) => {
  return (
    <div className={styles.lonelySearchWrapper}>
      {children}
      <div className={styles.animation}>
        Welcome here!{" "}
        <span
          onClick={() =>
            onMovieSelect("House of Gucci", {
              Title: "House of Gucci",
              Year: 2021,
              Poster:
                "https://m.media-amazon.com/images/M/MV5BZThjMTA5YjgtZmViZi00YjY0LTk5MzQtMjUwMGEzZGVlYzFjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
            })
          }
        >
          Select random movie
        </span>
      </div>
    </div>
  );
};

export default WelcomeSearchWrapper;
