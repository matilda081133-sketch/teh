import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className = "", property1 = "Default" }) => {
  return (
    <button
      className={[styles.button2, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.div}>оставить заявку</div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Button;
