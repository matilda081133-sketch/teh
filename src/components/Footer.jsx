import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <GroupComponent />
      <div className={styles.footerChild} />
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
