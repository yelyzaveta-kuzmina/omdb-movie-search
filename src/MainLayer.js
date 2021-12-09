import { useCallback, useState } from "react";
import MovieDetails from "./components/movieDetails/movieDetails";
import SearchWrapper from "./components/searchWrapper/searchWrapper";
import posterNotAvailable from "./assets/poster-not-available.jpeg";
import styles from "./styles.module.scss";

const MainLayer = () => {
  const [inputValue, setInputValue] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedMovieDescription, setSelectedMovieDescription] = useState("");

  const fetchMovies = useCallback(
    async (debouncedValue) =>
      await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${debouncedValue}`
      ).then((response) =>
        response.json().then((data) => setFetchedMovies(data.Search))
      ),
    []
  );

  const fetchMovieDetails = useCallback(
    async (movie) =>
      await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${movie}&p=full`
      ).then((response) =>
        response.json().then((data) => setSelectedMovieDescription(data))
      ),
    []
  );

  const onInputValueChange = useCallback(
    async (event) => {
      setInputValue(event.target.value);
      await fetchMovies(event.target.value);
    },
    [fetchMovies]
  );

  const onMovieSelect = useCallback(
    async (value, movieObject) => {
      setInputValue(value);
      await fetchMovieDetails(value);
      setSelectedMovie(movieObject);
    },
    [fetchMovieDetails]
  );

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
