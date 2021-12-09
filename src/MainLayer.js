import MovieDetails from "./components/movieDetails/movieDetails";
import SearchWrapper from "./components/searchWrapper/searchWrapper";
import posterNotAvailable from "./assets/poster-not-available.jpeg";
import useMovies from "./useMovies";
import styles from "./styles.module.scss";

const MainLayer = () => {
  const {
    inputValue,
    selectedMovie,
    fetchedMovies,
    selectedMovieDescription,
    onInputValueChange,
    onMovieSelect,
  } = useMovies();

  return (
    <>
      {!selectedMovie && (
        <div className={styles.lonelySearchWrapper}>
          <SearchWrapper
            className={styles.search}
            fetchedMovies={fetchedMovies}
            inputValue={inputValue}
            onInputValueChange={onInputValueChange}
            onMovieSelect={onMovieSelect}
          />
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
      )}

      {selectedMovie && (
        <div className={styles.main}>
          <SearchWrapper
            fetchedMovies={fetchedMovies}
            inputValue={inputValue}
            onInputValueChange={onInputValueChange}
            onMovieSelect={onMovieSelect}
          />

          {selectedMovie && (
            <div className={styles.content}>
              <>
                <div className={styles.posterWrapper}>
                  <figure>
                    <img
                      src={
                        selectedMovie.Poster === "N/A" || !selectedMovie.Poster
                          ? posterNotAvailable
                          : selectedMovie.Poster
                      }
                      alt=""
                    />
                    <figcaption>
                      <b>
                        {selectedMovie.Title} ({selectedMovie.Year})
                      </b>
                    </figcaption>
                  </figure>
                </div>
                <MovieDetails
                  selectedMovieDescription={selectedMovieDescription}
                />
              </>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MainLayer;
