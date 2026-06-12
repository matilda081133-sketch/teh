import PropTypes from "prop-types";
import styles from "./AboutSection3.module.css";

const FrameComponent111 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div}>Текст подписи к данной цифре</div>
            <h2 className={styles.h2}>455</h2>
          </div>
          <div className={styles.frameInner} />
          <div className={styles.group}>
            <h2 className={styles.h22}>24</h2>
            <div className={styles.div2}>Текст подписи к данной цифре</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent111;
