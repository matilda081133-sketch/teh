import PropTypes from "prop-types";
import styles from "./FrameComponent111111.module.css";

const FrameComponent111111 = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>
          {`Технологическая устойчивость`}
          <br />
          {` / эффективность / качество `}
        </div>
        <section className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.sida09Icon} alt="" src="/SIDA-09@2x.png" />
            </div>
            <div className={styles.frameItem} />
            <div className={styles.group}>
              <div className={styles.div2}>
                Эффективная реализация высокотехнологичных проектов начинается с
                выстраивания прозрачных коммуникаций
              </div>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/Group-248.svg"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

FrameComponent111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent111111;
