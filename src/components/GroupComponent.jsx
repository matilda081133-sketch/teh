import { useState } from "react";
import Link from "./Link";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";
import { useTranslation } from "react-i18next";

const GroupComponent = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const linkItems = [
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.manipulators'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.milling'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.turning'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.printers'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.injection'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('catalog.tools1') + " " + t('catalog.tools2'),
    },
  ];
  const linkItems1 = [
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l12'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l11'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l10'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l7'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l8'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l9'),
    },
  ];
  const linkItems2 = [
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l1'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l2'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l3'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l4'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l5'),
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: t('footer.l6'),
    },
  ];
  return (
    <div className={[styles.footerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="./Logo1.svg" />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="./Rectangle-1387.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>
                <p className={styles.p} style={{ whiteSpace: "pre-wrap" }}>{t('footer.quote1')}</p>
                <p className={styles.p2}>{t('footer.quote2')}</p>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="./Group1.svg" />
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.linkParent}>
                {linkItems.map((item, index) => (
                  <Link
                    key={index}
                    status1={item.status1}
                    linkAlignSelf={item.linkAlignSelf}
                    linkJustifyContent={item.linkJustifyContent}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.linkGroup}>
                {linkItems1.map((item, index) => (
                  <Link
                    key={index}
                    status1={item.status1}
                    linkAlignSelf={item.linkAlignSelf}
                    linkJustifyContent={item.linkJustifyContent}
                    link={item.link}
                  />
                ))}
              </div>
              <div className={styles.linkContainer}>
                {linkItems2.map((item, index) => (
                  <Link
                    key={index}
                    status1={item.status1}
                    linkAlignSelf={item.linkAlignSelf}
                    linkJustifyContent={item.linkJustifyContent}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.linkParent2}>
                <Link
                  status1="Default"
                  linkAlignSelf="stretch"
                  linkJustifyContent="flex-end"
                  link="K1Т"
                />
                <Link
                  status1="Default"
                  linkAlignSelf="stretch"
                  linkJustifyContent="flex-end"
                  link="Р-МАШ"
                />
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent}>
                <h1 className={styles.h1}>
                  {t('footer.collab1')}
                  <br />{t('footer.collab2')}
                </h1>
                <div className={styles.linkParent3}>
                  <a href="tel:88005437741" className={styles.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.info4aoru}>8 800 543 77 41</div>
                  </a>
                  <a href="mailto:info@4ao.ru" className={styles.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.info4aoru}>info@4ao.ru</div>
                  </a>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.component5Icon}
                    alt=""
                    src="./Component-5@2x.png"
                  />
                  <input
                    className={styles.eMail}
                    placeholder={t('footer.emailPlaceholder')}
                    type="text"
                  />
                </div>
                <div 
                  className={styles.frameParent5} 
                  onClick={() => setIsConsentChecked(!isConsentChecked)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.rectangleWrapper}>
                    <div 
                      className={styles.frameInner} 
                      style={{ 
                        backgroundColor: isConsentChecked ? "var(--Grey)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {isConsentChecked && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3L3 5L7 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className={styles.div3}>
                    {t('footer.consent')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.aoruParent}>
              <div className={styles.aoru}>
                {t('footer.policy')}
              </div>
              <div className={styles.copyright2024Wrapper}>
                <div className={styles.copyright2024}>
                  {t('footer.copyright')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
