import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./AboutSection4.module.css";

const AboutSection4 = ({ className = "" }) => {
  const [activeTeamMember, setActiveTeamMember] = useState(1);
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
          <b className={styles.b}>
            <span className={styles.indent}></span>Миссия компании - внедрение<br />
            концепции «Цифрового предприятия» через создание единой<br />
            экосистемы, связывающей идею устройства с его<br />
            физическим воплощением и последующим сервисным<br />
            сопровождением.
          </b>
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
                  Проектирование систем с учетом долгосрочного<br />
                  жизненного цикла, доступности компонентной базы<br />
                  и возможности модернизации.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>02</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Бескомпромиссное качество</h3>
                <div className={styles.c}>
                  Cтрогое следование международным и российским<br />
                  стандартам (IPC, ГОСТ, IEC, ISO) на каждом этапе -<br />
                  от схемотехники до монтажа.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>03</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Минимизация операционных рисков</h3>
                <div className={styles.vModelDfx}>
                  Применение методологий V-Model и DFX (DFM/<br />
                  DFA/DFT) для выявления потенциальных ошибок на<br />
                  ранних стадиях, что предотвращает кратные<br />
                  финансовые потери при серийном выпуске.
                </div>
              </div>
            </section>
            <section className={styles.card}>
              <h2 className={styles.h2}>04</h2>
              <div className={styles.bottom}>
                <h3 className={styles.h3}>Экономическая эффективность</h3>
                <div className={styles.c}>
                  Обоснование каждого технического решения через<br />
                  призму возврата инвестиций (ROI) и оптимизации<br />
                  себестоимости без потери надежности.
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div6}>/ Наша команда</div>
          <div className={styles.teamSection}>
            <div className={styles.teamLeft}>
              <img
                className={styles.teamPhoto}
                loading="lazy"
                alt=""
                src="./image-779@2x.png"
              />
            </div>
            <div className={styles.teamRight}>
              {[
                { name: 'АНТОН ГАДОЕВ', role: 'Ведущий специалист по продажам', desc: 'Опыт работы в сфере B2B продаж более 10 лет. Эксперт по ведению ключевых клиентов.' },
                { name: 'ЕВГЕНИЙ КОРЖЕВНИКОВ', role: 'Старший инженер', desc: 'Применение методологий V-Model и DFX (DFM/DFA/DFT) для выявления потенциальных ошибок на ранних стадиях, что предотвращает кратные финансовые потери при серийном выпуске.' },
                { name: 'СЕМЁН САМОЙЛОВ', role: 'Управляющий директор', desc: 'Стратегическое управление компанией, развитие новых направлений и контроль качества продукции.' },
                { name: 'ДЕНИС КОРОВАЕВ', role: 'Старший дизайнер', desc: 'Создание интуитивно понятных интерфейсов и промышленный дизайн аппаратных комплексов.' }
              ].map((member, idx) => {
                const isActive = activeTeamMember === idx;
                return (
                  <div 
                    key={idx} 
                    className={`${styles.teamRow} ${isActive ? styles.teamRowActive : ''}`}
                    onClick={() => setActiveTeamMember(idx)}
                  >
                    <div className={styles.teamRowContent}>
                      <h2 className={styles.teamName}>{member.name}</h2>
                      <div className={styles.teamRole}>{member.role}</div>
                      {isActive && (
                        <div className={styles.teamDesc}>{member.desc}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

AboutSection4.propTypes = {
  className: PropTypes.string,
};

export default AboutSection4;
