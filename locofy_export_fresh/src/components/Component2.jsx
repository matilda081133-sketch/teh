import PropTypes from "prop-types";
import styles from "./Component2.module.css";

const Component2 = ({ className = "", text }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Component2;
