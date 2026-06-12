import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.css";

const Link = ({
  className = "",
  status1 = "Default",
  linkAlignSelf,
  linkJustifyContent,
  link,
}) => {
  const linkStyle = useMemo(() => {
    return {
      alignSelf: linkAlignSelf,
      justifyContent: linkJustifyContent,
    };
  }, [linkAlignSelf, linkJustifyContent]);

  return (
    <div
      className={[styles.link, className].join(" ")}
      data-status={status1}
      style={linkStyle}
    >
      <div className={styles.link2}>{link}</div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,

  /** Variant props */
  status1: PropTypes.string,

  /** Style props */
  linkAlignSelf: PropTypes.string,
  linkJustifyContent: PropTypes.string,
};

export default Link;
