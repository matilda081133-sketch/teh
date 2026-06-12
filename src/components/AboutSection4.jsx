import PropTypes from "prop-types";
import styles from "./AboutSection4.module.css";

const FrameComponent1111 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <section className={styles.frameContainer}>
          <div className={styles.parent}>
            <div className={styles.div}>/ История развития</div>
            <div
              className={styles.rd}
            >{`Компания сформирована как экспертный центр, объединяющий компетенции в области прецизионного инжиниринга, промышленной автоматизации и управления сложными производственными циклами. Наш путь начался с реализации высокотехнологичных R&D-проектов, где критически важными факторами всегда были точность проектирования и надежность аппаратных решений.`}</div>
          </div>
          <div className={styles.rdWrapper}>
            <div
              className={styles.rd2}
            >{`Сегодня мы выступаем в роли единого центра ответственности для наших партнеров, обеспечивая бесшовную интеграцию этапов разработки, подготовки к серии и международной логистики. Мы говорим на одном языке с R&D-департаментами и производственными площадками, устраняя технические и коммуникационные барьеры в цепочке создания продукта.`}</div>
          </div>
        </section>
        <div className={styles.mission}>
          <div className={styles.div2}>/ История развития</div>
          <b
            className={styles.b}
          >{`                                                          Миссия компании - внедрение концепции «Цифрового предприятия» через создание единой экосистемы, связывающей идею устройства с его физическим воплощением и последующим сервисным сопровождением. `}</b>
          <div className={styles.wrapper}>
            <div className={styles.div3}>
              Мы стремимся к повышению конкурентоспособности отечественной
              промышленности, предоставляя доступ к передовым технологиям
              проектирования и производства.
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div4}>/ Ключевые приоритеты</div>
          <div className={styles.cards}>
            <section className={styles.card}>
              <h2 className={styles.h2}>01</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Технологическая устойчивость</h3>
                <div className={styles.c}>
                  Проектирование систем с учетом долгосрочного жизненного цикла,
                  доступности компонентной базы и возможности модернизации.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>02</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Бескомпромиссное качество</h3>
                <div className={styles.c}>
                  Cтрогое следование международным и российским стандартам (IPC,
                  ГОСТ, IEC, ISO) на каждом этапе - от схемотехники до монтажа.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>03</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Минимизация операционных рисков</h3>
                <div className={styles.vModelDfx}>
                  Применение методологий V-Model и DFX (DFM/DFA/DFT) для
                  выявления потенциальных ошибок на ранних стадиях, что
                  предотвращает кратные финансовые потери при серийном выпуске.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>04</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Экономическая эффективность</h3>
                <div className={styles.c}>
                  Обоснование каждого технического решения через призму возврата
                  инвестиций (ROI) и оптимизации себестоимости без потери
                  надежности.
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div6}>/ Наша команда</div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent2}>
                <h2 className={styles.h25}>Антон Гадоев</h2>
                <div
                  className={styles.div7}
                >{`Ведущий специалист по продажам `}</div>
              </div>
            </div>
            <section className={styles.frameSection}>
              <div className={styles.parent3}>
                <h2 className={styles.h26}>Евгений Коржевников</h2>
                <div className={styles.div8}>Старший инженер</div>
                <div className={styles.vModelDfx2}>
                  Применение методологий V-Model и DFX (DFM/DFA/DFT) для
                  выявления потенциальных ошибок на ранних стадиях, что
                  предотвращает кратные финансовые потери при серийном выпуске.
                </div>
              </div>
            </section>
            <div className={styles.frameWrapper2}>
              <div className={styles.parent2}>
                <h2 className={styles.h25}>Семён Самойлов</h2>
                <div className={styles.div7}>Управляющий директор</div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.parent2}>
                <h2 className={styles.h25}>Денис короваев</h2>
                <div className={styles.div7}>Старший дизайнер</div>
              </div>
            </div>
          </div>
          <img
            className={styles.image779Icon}
            loading="lazy"
            alt=""
            src="./image-779@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <div className={styles.seeStretchWrapper}>
          <div className={styles.seeStretch}>See Stretch</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1111;
