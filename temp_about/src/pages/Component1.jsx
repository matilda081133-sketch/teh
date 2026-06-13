import FrameComponent from "../components/FrameComponent";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent111 from "../components/FrameComponent111";
import FrameComponent1111 from "../components/FrameComponent1111";
import Button from "../components/Button";
import FrameComponent11111 from "../components/FrameComponent11111";
import Footer from "../components/Footer";
import styles from "./Component1.module.css";

const Component1 = () => {
  return (
    <div className={styles.div}>
      <img className={styles.child} alt="" src="/Group-146.svg" />
      <h1
        className={styles.h1}
      >{`внедрение / АВТОМАТИЗАЦИЯ / ПРОЕКТИРОВАНИЕ / ИЗГОТОВЛЕНИЕ / РАЗРАБОТКА / ПРОИЗРОДСТВО / логистика  `}</h1>
      <div className={styles.inner}>
        <div className={styles.frameParent}>
          <FrameComponent />
          <div className={styles.frameChild} />
          <FrameComponent11 />
        </div>
      </div>
      <main className={styles.frameGroup}>
        <FrameComponent1 />
        <FrameComponent111 />
        <FrameComponent1111 />
      </main>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.wrapper}>
              <b className={styles.b}>
                Если ваша цель - глубокая автоматизация или подготовка продукта
                к серийному выпуску, вы можете оставить заявку на первичный
                экспертный аудит
              </b>
            </div>
            <div className={styles.div2}>
              Мы не просто предоставляем услуги - мы создаем долгосрочную
              инфраструктуру для вашего бизнеса. Наша команда готова включиться
              в проект на любом этапе: от первичного аудита производственных
              мощностей до организации бесперебойных поставок готовых серийных
              изделий.
            </div>
          </div>
          <Button property1="Default" />
        </div>
      </section>
      <FrameComponent11111 />
      <Footer />
    </div>
  );
};

export default Component1;
