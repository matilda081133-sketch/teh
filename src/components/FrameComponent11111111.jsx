import FrameComponent11 from "./FrameComponent11";
import PropTypes from "prop-types";
import styles from "./FrameComponent11111111.module.css";

const FrameComponent11111111 = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.parent}>
          <div className={styles.div}>/ Наши услуги</div>
          <div className={styles.group}>
            <b className={styles.b}>
              Наша команда готова включиться
              <br />в проект на любом этапе: от первичного аудита до поставок
              готовых
              <br />
              серийных изделий
            </b>
            <div className={styles.div2}>
              <p
                className={styles.p}
              >{`Мы не просто предоставляем услуги - `}</p>
              <p
                className={styles.p}
              >{`мы создаем долгосрочную инфраструктуру `}</p>
              <p className={styles.p3}>для вашего бизнеса</p>
            </div>
          </div>
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <FrameComponent11
              prop="[ 01 ]"
              prop1="Схемотехническое проектирование"
            />
            <div className={styles.frameChild} />
            <FrameComponent11
              prop="[ 02 ]"
              prop1="Трассировка печатных плат"
              h3AlignSelf="unset"
              h3Width="260px"
              h3Display="inline-block"
            />
            <div className={styles.frameChild} />
            <FrameComponent11
              prop="[ 03 ]"
              prop1="Разработка встраиваемого ПО"
              h3AlignSelf="stretch"
              h3Width="unset"
              h3Display="unset"
            />
            <div className={styles.frameChild} />
          </div>
        </section>
        <div className={styles.lineGroup}>
          <div className={styles.frameChild2} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.frameGroup}>
          <section className={styles.frameSection}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent2}>
                <div className={styles.container}>
                  <div className={styles.div3}>[ 04 ]</div>
                  <img
                    className={styles.component21Icon}
                    alt=""
                    src="/Component-32@2x.png"
                  />
                </div>
                <h3 className={styles.h3}>
                  Промышленный дизайн и проектирование корпусов
                </h3>
              </div>
              <div className={styles.frameChild7} />
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.frameChild8} />
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.container}>
                    <div className={styles.div3}>[ 05 ]</div>
                    <img
                      className={styles.component21Icon}
                      alt=""
                      src="/Component-32@2x.png"
                    />
                  </div>
                  <h3 className={styles.h32}>
                    Подготовка к серийному производству
                  </h3>
                </div>
                <div className={styles.frameChild9} />
              </div>
            </div>
            <div className={styles.lineParent2}>
              <div className={styles.frameChild8} />
              <div className={styles.frameParent5}>
                <div className={styles.container}>
                  <div className={styles.div3}>[ 06 ]</div>
                  <img
                    className={styles.component21Icon}
                    alt=""
                    src="/Component-32@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.wrapper}>
                    <h3 className={styles.h33}>
                      Размещение заказов в России и Китае
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.frameChild8} />
            </div>
          </section>
          <div className={styles.lineParent3}>
            <div className={styles.frameChild12} />
            <div className={styles.frameChild12} />
            <div className={styles.frameChild12} />
            <div className={styles.frameChild12} />
            <div className={styles.frameChild12} />
          </div>
          <section className={styles.frameWrapper3}>
            <div className={styles.frameParent6}>
              <FrameComponent11
                prop="[ 07 ]"
                prop1="Аудит производственных процессов"
                h3AlignSelf="unset"
                h3Width="293px"
                h3Display="inline-block"
              />
              <div className={styles.frameChild} />
              <FrameComponent11
                prop="[ 08 ]"
                prop1="Проектирование систем автоматизации"
                h3AlignSelf="unset"
                h3Width="279px"
                h3Display="inline-block"
              />
              <div className={styles.frameChild} />
              <div className={styles.frameParent7}>
                <div className={styles.container}>
                  <div className={styles.div3}>[ 09 ]</div>
                  <img
                    className={styles.component21Icon}
                    alt=""
                    src="/Component-32@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.wrapper}>
                    <h3 className={styles.h34}>Внедрение</h3>
                  </div>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </section>
          <div className={styles.frameWrapper5}>
            <div className={styles.lineParent4}>
              <div className={styles.frameChild12} />
              <div className={styles.frameChild12} />
              <div className={styles.frameChild12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent11111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11111111;
