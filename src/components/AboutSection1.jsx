import PropTypes from "prop-types";
import styles from "./AboutSection1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.parent}>
          <h2 className={styles.h2}>2005</h2>
          <div className={styles.div}>
            Основание компании<br />
            АО “ТЕХ”
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.group}>
        <div className={styles.div2}>Партнеров по всему миру</div>
        <h2 className={styles.h22}>100+</h2>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
