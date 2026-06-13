import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <GroupComponent />
      <div className={styles.footerChild} />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
