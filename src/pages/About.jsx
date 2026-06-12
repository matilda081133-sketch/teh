import { useTranslation } from "react-i18next";
import FrameComponent11111 from "../components/FrameComponent11111"; // Header
import AboutSection2 from "../components/AboutSection2";
import AboutSection1 from "../components/AboutSection1";
import AboutSection3 from "../components/AboutSection3";
import AboutSection4 from "../components/AboutSection4";
import Button from "../components/Button";
import AboutContacts from "../components/AboutContacts";
import GroupComponent from "../components/GroupComponent"; // Footer
import styles from "./About.module.css";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.div}>
      <img className={styles.child} alt="" src="./Group-146.svg" />
      
      <div className={styles.marqueeContainer}>
        {i18n.language === 'ru' ? (
          <div className={styles.marqueeContent}>
            <img src="./about-heading.png" alt="внедрение / АВТОМАТИЗАЦИЯ / ПРОЕКТИРОВАНИЕ / ИЗГОТОВЛЕНИЕ / РАЗРАБОТКА / ПРОИЗРОДСТВО / логистика" className={styles.marqueeImage} />
            <img src="./about-heading.png" alt="" className={styles.marqueeImage} aria-hidden="true" />
          </div>
        ) : (
          <h1 className={`${styles.h1} ${styles.marqueeText}`}>
            {t('about.heroTitle', 'внедрение / АВТОМАТИЗАЦИЯ / ПРОЕКТИРОВАНИЕ / ИЗГОТОВЛЕНИЕ / РАЗРАБОТКА / ПРОИЗРОДСТВО / логистика  ')}
          </h1>
        )}
      </div>

      <div className={styles.inner}>
        <div className={styles.frameParent}>
          <FrameComponent11111 />
          <AboutSection2 />
        </div>
      </div>
      <main className={styles.frameGroup}>
        <AboutSection1 />
        <AboutSection3 />
        <AboutSection4 />
      </main>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.wrapper}>
              <b className={styles.b}>
                {t('about.footerTitle', 'Если ваша цель - глубокая автоматизация или подготовка продукта к серийному выпуску, вы можете оставить заявку на первичный экспертный аудит')}
              </b>
            </div>
            <div className={styles.div2}>
              {t('about.footerText', 'Мы не просто предоставляем услуги - мы создаем долгосрочную инфраструктуру для вашего бизнеса. Наша команда готова включиться в проект на любом этапе: от первичного аудита производственных мощностей до организации бесперебойных поставок готовых серийных изделий.')}
            </div>
          </div>
          <Button property1="Default" />
        </div>
      </section>
      <AboutContacts />
      <footer className={styles.footerWrap}>
        <GroupComponent />
      </footer>
    </div>
  );
};

export default About;
