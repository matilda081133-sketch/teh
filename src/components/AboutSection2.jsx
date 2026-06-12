import PropTypes from "prop-types";
import styles from "./AboutSection2.module.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>
          Эффективная реализация высокотехнологичных проектов начинается с
          выстраивания прозрачных коммуникаций
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="./Vector.svg" />
          <img className={styles.vectorIcon2} alt="" src="./Vector1.svg" />
          <img className={styles.vectorIcon3} alt="" src="./Vector2.svg" />
          <img className={styles.vectorIcon4} alt="" src="./Vector3.svg" />
          <img className={styles.vectorIcon5} alt="" src="./Vector4.svg" />
          <img className={styles.icon} alt="" src="./1-1@2x.png" />
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="./Group-271.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
