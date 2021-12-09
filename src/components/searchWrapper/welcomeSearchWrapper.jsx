import { randomlySuggestedMovie } from "../../constants";
import styles from "./styles.module.scss";

const WelcomeSearchWrapper = ({ children, onMovieSelect }) => {
  return (
    <div className={styles.lonelySearchWrapper}>
      {children}
      <div className={styles.text}>
        Welcome here!{" "}
        <span
          onClick={() =>
            onMovieSelect(randomlySuggestedMovie.Title, randomlySuggestedMovie)
          }
        >
          Select random movie
        </span>
      </div>
    </div>
  );
};

export default WelcomeSearchWrapper;
