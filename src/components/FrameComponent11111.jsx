import { useState } from "react";
import Link from "./Link";
import PropTypes from "prop-types";
import styles from "./FrameComponent11111.module.css";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const FrameComponent11111 = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const linkItems = [
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.catalog'), to: "/" },
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.services'), to: "/" },
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.industries'), to: "/" },
  ];
  
  const linkItems1 = [
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.about'), to: "/about" },
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.brands'), to: "/" },
    { status1: "Default", linkAlignSelf: "", linkJustifyContent: "", link: t('header.contacts'), to: "/" },
  ];

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logoWrapper}>
            <RouterLink to="/">
              <img className={styles.logoIcon} loading="lazy" alt="" src="./Logo.svg" />
            </RouterLink>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.linkParent}>
              {linkItems.map((item, index) => (
                <Link key={index} status1={item.status1} linkAlignSelf={item.linkAlignSelf} linkJustifyContent={item.linkJustifyContent} link={item.link} to={item.to} />
              ))}
            </div>
            <div className={styles.linkGroup}>
              {linkItems1.map((item, index) => (
                <Link key={index} status1={item.status1} linkAlignSelf={item.linkAlignSelf} linkJustifyContent={item.linkJustifyContent} link={item.link} to={item.to} />
              ))}
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent2}>
                <div className={styles.linkContainer} onClick={() => setIsLangOpen(!isLangOpen)} style={{ position: 'relative' }}>
                  <div className={styles.link}>
                    <div className={styles.div}>{i18n.language === 'ru' ? 'Ру' : 'En'}</div>
                  </div>
                  <div className={styles.instanceWrapper}>
                    <img className={styles.frameChild} loading="lazy" alt="" src="./Vector-56.svg" style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </div>
                  {isLangOpen && (
                    <div className={styles.langDropdown}>
                      <div onClick={(e) => { e.stopPropagation(); handleLangChange('ru'); }} className={styles.langOption}>Русский (Ру)</div>
                      <div onClick={(e) => { e.stopPropagation(); handleLangChange('en'); }} className={styles.langOption}>English (En)</div>
                    </div>
                  )}
                </div>
                <div className={styles.frameWrapper3}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt="Поиск"
                    src="./Group-145.svg"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  />
                  {isSearchOpen && (
                    <input 
                      type="text" 
                      className={styles.searchInput} 
                      placeholder={t('header.search')} 
                      autoFocus 
                    />
                  )}
                </div>
              </div>
            </div>
            <a href="tel:88005437741" className={styles.link2} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.div}>8 800 543 77 41</div>
            </a>
          </div>
        </div>
        <div className={styles.frameInner} />
      </header>
    </section>
  );
};

FrameComponent11111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11111;
