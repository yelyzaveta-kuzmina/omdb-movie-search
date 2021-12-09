import MovieDetails from "./components/movieDetails/movieDetails";
import SearchWrapper from "./components/searchWrapper/searchWrapper";
import posterNotAvailable from "./assets/poster-not-available.jpeg";
import useMovies from "./useMovies";
import styles from "./styles.module.scss";
import WelcomeSearchWrapper from "./components/searchWrapper/welcomeSearchWrapper";

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
        <WelcomeSearchWrapper onMovieSelect={onMovieSelect}>
          <SearchWrapper
            className={styles.search}
            fetchedMovies={fetchedMovies}
            inputValue={inputValue}
            onInputValueChange={onInputValueChange}
            onMovieSelect={onMovieSelect}
          />
        </WelcomeSearchWrapper>
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
