import SearchWrapper from "./components/searchWrapper/searchWrapper";
import WelcomeSearchWrapper from "./components/searchWrapper/welcomeSearchWrapper";
import MovieContainer from "./components/movieContainer/movieContainer";
import useMovies from "./useMovies";
import styles from "./styles.module.scss";

const MainLayer = () => {
  const { onMovieSelect, selectedMovie, selectedMovieDescription } =
    useMovies();

  return (
    <>
      {!selectedMovie && (
        <WelcomeSearchWrapper onMovieSelect={onMovieSelect}>
          <SearchWrapper
            className={styles.search}
            onMovieSelect={onMovieSelect}
          />
        </WelcomeSearchWrapper>
      )}

      {selectedMovie && (
        <div className={styles.main}>
          <SearchWrapper onMovieSelect={onMovieSelect} />

          <MovieContainer
            selectedMovie={selectedMovie}
            selectedMovieDescription={selectedMovieDescription}
          />
        </div>
      )}
    </>
  );
};

export default MainLayer;
