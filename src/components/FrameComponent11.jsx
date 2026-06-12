import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({
  className = "",
  prop,
  prop1,
  h3AlignSelf,
  h3Width,
  h3Display,
}) => {
  const h3Style = useMemo(() => {
    return {
      alignSelf: h3AlignSelf,
      width: h3Width,
      display: h3Display,
    };
  }, [h3AlignSelf, h3Width, h3Display]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>{prop}</div>
        <img
          className={styles.component21Icon}
          alt=""
          src="./Component-32@2x.png"
        />
      </div>
      <h3 className={styles.h3} style={h3Style}>
        {prop1}
      </h3>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  h3AlignSelf: PropTypes.string,
  h3Width: PropTypes.string,
  h3Display: PropTypes.string,
};

export default FrameComponent11;
