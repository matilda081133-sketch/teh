import FrameComponent11111 from "../components/FrameComponent11111";
import FrameComponent111111 from "../components/FrameComponent111111";
import FrameComponent1111111 from "../components/FrameComponent1111111";
import FrameComponent11111111 from "../components/FrameComponent11111111";
import FrameComponent111111111 from "../components/FrameComponent111111111";
import Footer from "../components/Footer";
import styles from "./Component1.module.css";

const Component1 = () => {
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
                <b
                  className={styles.b}
                >{`                                                          Миссия компании - внедрение концепции «Цифрового предприятия» через создание единой экосистемы, связывающей идею устройства с его физическим воплощением и последующим сервисным сопровождением. `}</b>
              </div>
              <div className={styles.div2}>/ Наша миссия</div>
            </section>
            <div className={styles.container}>
              <div className={styles.div3}>
                Мы стремимся к повышению конкурентоспособности отечественной
                промышленности, предоставляя доступ к передовым технологиям
                проектирования и производства.
              </div>
            </div>
          </div>
        </section>
        <FrameComponent1111111 />
        <FrameComponent11111111 />
        <div className={styles.frameDiv}>
          <div className={styles.parent}>
            <div className={styles.div4}>/ Партнеры</div>
            <div className={styles.div5}>
              Наша компания имеет крупный пул кочевых паттернов и вот только
              некоторые из них
            </div>
          </div>
        </div>
        <FrameComponent111111111 />
        <Footer />
      </main>
      <div className={styles.inner}>
        <div className={styles.seeStretchWrapper}>
          <div className={styles.seeStretch}>See Stretch</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
