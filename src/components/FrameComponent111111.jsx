import PropTypes from "prop-types";
import styles from "./FrameComponent111111.module.css";
import { useTranslation } from "react-i18next";

const FrameComponent111111 = ({ className = "" }) => {
  const { t, i18n } = useTranslation();

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>
          {i18n.language === 'ru' ? (
            <img src="./hero-heading.png" alt="Технологическая устойчивость" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <>
              {t('hero.title1')}
              <br />
              {t('hero.title2')}
            </>
          )}
        </div>
        <section className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.sida09Icon} alt="" src="./SIDA-09@2x.png" />
            </div>
            <div className={styles.frameItem} />
            <div className={styles.group}>
              <div className={styles.div2}>
                {t('hero.subtitle')}
              </div>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="./Group-248.svg"
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
