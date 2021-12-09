import { useCallback, useState } from "react";

const useMovies = () => {
  const [inputValue, setInputValue] = useState("");
  const [year, setYear] = useState("");
  const [isErrorMessage, setErrorMessage] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [selectedMovieDescription, setSelectedMovieDescription] = useState("");

  const fetchMovies = useCallback(
    async (movieTitle) => {
      try {
        await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}&y=${year}`
        ).then((response) =>
          response.json().then((data) => {
            if (data.Response === "False") {
              setErrorMessage(data.Error);
              return;
            }
            setFetchedMovies(data.Search);
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    [year]
  );

  const fetchMovieDetails = useCallback(
    async (id) => {
      try {
        await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&p=full`
        ).then((response) =>
          response.json().then((data) => setSelectedMovieDescription(data))
        );
      } catch (error) {
        console.log(error);
      }
    },

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
    async (movieTitle, movieObject) => {
      setInputValue(movieTitle);
      await fetchMovieDetails(movieObject.imdbID);
      setSelectedMovie(movieObject);
    },
    [fetchMovieDetails]
  );

  return {
    isErrorMessage,
    inputValue,
    setYear,
    selectedMovie,
    fetchMovies,
    fetchMovieDetails,
    fetchedMovies,
    selectedMovieDescription,
    onInputValueChange,
    onMovieSelect,
  };
};

export default useMovies;
