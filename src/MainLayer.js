import SearchWrapper from "./components/searchWrapper/searchWrapper";
import WelcomeSearchWrapper from "./components/searchWrapper/welcomeSearchWrapper";
import MovieContainer from "./components/movieContainer/movieContainer";
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
            <MovieContainer
              selectedMovie={selectedMovie}
              selectedMovieDescription={selectedMovieDescription}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MainLayer;
