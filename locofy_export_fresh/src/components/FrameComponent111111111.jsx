import PropTypes from "prop-types";
import styles from "./FrameComponent111111111.module.css";

const FrameComponent111111111 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>100+</h1>
      </div>
      <div className={styles.partnerParent}>
        <div className={styles.partner}>
          <img
            className={styles.partnerChild}
            loading="lazy"
            alt=""
            src="/Group-350.svg"
          />
        </div>
        <div className={styles.partner2}>
          <img
            className={styles.partnerItem}
            loading="lazy"
            alt=""
            src="/Group-349.svg"
          />
        </div>
        <div className={styles.partner3}>
          <img className={styles.groupIcon} alt="" src="/Group2.svg" />
        </div>
        <div className={styles.partner2}>
          <img
            className={styles.partnerInner}
            loading="lazy"
            alt=""
            src="/Group-352.svg"
          />
        </div>
        <div className={styles.partner3}>
          <img
            className={styles.partnerChild2}
            loading="lazy"
            alt=""
            src="/Group-240.svg"
          />
        </div>
        <div className={styles.partner2}>
          <img
            className={styles.partnerInner}
            loading="lazy"
            alt=""
            src="/Group-351.svg"
          />
        </div>
        <div className={styles.partner3}>
          <img className={styles.groupIcon2} alt="" src="/Group3.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent111111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent111111111;
