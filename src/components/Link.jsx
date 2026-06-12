import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({
  className = "",
  status1 = "Default",
  linkAlignSelf,
  linkJustifyContent,
  link,
  to,
}) => {
  const linkStyle = useMemo(() => {
    return {
      alignSelf: linkAlignSelf,
      justifyContent: linkJustifyContent,
    };
  }, [linkAlignSelf, linkJustifyContent]);

  const content = (
    <div
      className={[styles.link, className].join(" ")}
      data-status={status1}
      style={linkStyle}
    >
      <div className={styles.link2}>{link}</div>
    </div>
  );

  return to ? (
    <RouterLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </RouterLink>
  ) : (
    content
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
