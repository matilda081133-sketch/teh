import FrameComponent11111 from "../components/FrameComponent11111";
import GroupComponent from "../components/GroupComponent";
import styles from "./Brands.module.css";
import { useEffect } from "react";

const Brands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.div}>
      {/* Background grid lines */}
      <img className={styles.child} alt="" src="./Group-146.svg" />

      {/* Header */}
      <FrameComponent11111 />

      {/* Main Content */}
      <main className={styles.inner}>
        <div className={styles.frameParent}>
          <div className={styles.breadcrumb}>/ Бренды</div>

          <section className={styles.cardsContainer}>
            {/* Card 1: KIT */}
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <img className={styles.cardLogo} alt="KIT" src="./logo-kit.png" />
                <img className={styles.cardArrow} alt="Arrow" src="./Group.svg" />
              </div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} alt="Drone" src="./brand-drone.png" />
              </div>
              <div className={styles.cardBottom}>
                <h2 className={styles.cardTitle}>Инженерия без<br />компромиссов</h2>
                <p className={styles.cardSubtitle}>
                  Сверхпрочные инженерные наборы для тех, кто готов<br />выйти за рамки обычной детской игрушки
                </p>
              </div>
            </div>

            {/* Card 2: P-MASH */}
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <img className={styles.cardLogo} alt="P-MASH" src="./logo-rmash.png" />
                <img className={styles.cardArrow} alt="Arrow" src="./Group.svg" />
              </div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} alt="CNC Machine" src="./brand-cnc.png" />
              </div>
              <div className={styles.cardBottom}>
                <h2 className={styles.cardTitle}>Технологическая<br />независимость</h2>
                <p className={styles.cardSubtitle}>
                  Огромная линейка для автоматизации вашего<br />производства любой сложности
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <GroupComponent />
    </div>
  );
};

export default Brands;
