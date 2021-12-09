import { useCallback, useState } from "react";

const useMovies = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
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

  return {
    inputValue,
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
