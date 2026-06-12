import FrameComponent11111 from "../components/FrameComponent11111";
import FrameComponent111111 from "../components/FrameComponent111111";
import FrameComponent1111111 from "../components/FrameComponent1111111";
import FrameComponent11111111 from "../components/FrameComponent11111111";
import FrameComponent111111111 from "../components/FrameComponent111111111";
import Footer from "../components/Footer";
import styles from "./Component1.module.css";
import { useTranslation } from "react-i18next";

const Component1 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.div}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/Group-146.svg" />
        <div className={styles.frameItem} />
        <img className={styles.icon} alt="" src="/1-1@2x.png" />
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/Group.svg"
        />
      </div>
      <main className={styles.frameGroup}>
        <FrameComponent11111 />
        <FrameComponent111111 />
        <section className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <section className={styles.frameSection}>
              <div className={styles.wrapper}>
                <b className={styles.b}>{t('mission.mainText')}</b>
              </div>
              <div className={styles.div2}>{t('mission.title')}</div>
            </section>
            <div className={styles.container}>
              <div className={styles.div3}>{t('mission.subText')}</div>
            </div>
          </div>
        </section>
        <FrameComponent1111111 />
        <FrameComponent11111111 />
        <div className={styles.frameDiv}>
          <div className={styles.parent}>
            <div className={styles.div4}>{t('partners.title', '/ Партнеры')}</div>
            <div className={styles.div5}>{t('partners.subText', 'Наша компания имеет крупный пул ключевых партнеров и вот только некоторые из них')}</div>
          </div>
        </div>
        <FrameComponent111111111 />
        <Footer />
      </main>
      <div className={styles.inner}>
        <div className={styles.seeStretchWrapper}>
          <div className={styles.seeStretch}>{t('mission.seeStretch')}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
