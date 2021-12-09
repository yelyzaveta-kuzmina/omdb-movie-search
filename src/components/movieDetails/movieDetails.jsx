import styles from "./styles.module.scss";

const Block = ({ label, value }) => {
  return (
    <p>
      <b>{label}: </b>
      {value}
    </p>
  );
};

const MovieDetails = ({ selectedMovieDescription }) => {
  return (
    <div className={styles.details}>
      <Block label={"Runtime"} value={selectedMovieDescription.Runtime} />
      <Block label={"Genre"} value={selectedMovieDescription.Genre} />
      <Block label={"Country"} value={selectedMovieDescription.Country} />
      <Block label={"Director"} value={selectedMovieDescription.Director} />
      <Block label={"Released"} value={selectedMovieDescription.Released} />
      <Block label={"Actors"} value={selectedMovieDescription.Actors} />
      <Block label={"Plot"} value={selectedMovieDescription.Plot} />
    </div>
  );
};

export default MovieDetails;
