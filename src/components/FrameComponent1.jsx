import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "", prop, prop1, prop2, h1Width }) => {
  const h1Style = useMemo(() => {
    return {
      width: h1Width,
    };
  }, [h1Width]);

  return (
    <section className={[styles.lineParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.parent}>
        <h2 className={styles.h2}>{prop}</h2>
        <div className={styles.group}>
          <div className={styles.div}>{prop1}</div>
          <div className={styles.wrapper}>
            <h1 className={styles.h1} style={h1Style}>
              {prop2}
            </h1>
          </div>
          <img
            className={styles.component31Icon}
            alt=""
            src="/Component-32@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,

  /** Style props */
  h1Width: PropTypes.string,
};

export default FrameComponent1;
