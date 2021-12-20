import MovieDetails from "../movieDetails/movieDetails";
import posterNotAvailable from "../../assets/poster-not-available.jpeg";
import styles from "./styles.module.scss";

const MovieContainer = ({ selectedMovie, selectedMovieDescription }) => {
  return (
    <div className={styles.content}>
      <div className={styles.posterWrapper}>
        <figure>
          <img
            src={
              selectedMovie.Poster === "N/A" || !selectedMovie.Poster
                ? posterNotAvailable
                : selectedMovie.Poster
            }
            alt="poster"
          />
          <figcaption>
            <div className={styles.title}>
              {selectedMovie.Title} ({selectedMovie.Year})
            </div>
          </figcaption>
        </figure>
      </div>
      <MovieDetails selectedMovieDescription={selectedMovieDescription} />
    </div>
  );
};

export default MovieContainer;
