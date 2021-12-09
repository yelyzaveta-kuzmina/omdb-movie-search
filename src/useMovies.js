import { useCallback, useState } from "react";

const useMovies = () => {
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

  return {
    fetchMovies,
    fetchMovieDetails,
    fetchedMovies,
    selectedMovieDescription,
  };
};

export default useMovies;
