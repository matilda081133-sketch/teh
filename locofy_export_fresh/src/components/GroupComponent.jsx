import { useState } from "react";
import Link from "./Link";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  const [linkItems] = useState([
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "роботы манипуляторы",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "фрезерные  обрабатывающие центры",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "токарные станки",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "3д принтеры",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "термопластавтоматы",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "инструмент и расходные  материалы",
    },
  ]);
  const [linkItems1] = useState([
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "трассировка печатных плат",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "разработка корпусов",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "программирование",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "комплексное внедрение",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "производство",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "индустрии",
    },
  ]);
  const [linkItems2] = useState([
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "о компании",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "миссия",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "партнеры",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "карьера",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "страны присутствия",
    },
    {
      status1: "Default",
      linkAlignSelf: "stretch",
      linkJustifyContent: "",
      link: "логистика",
    },
  ]);
  return (
    <div className={[styles.footerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="/Logo1.svg" />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/Rectangle-1387.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>
                <p className={styles.p}>{`Единственное
счастье в жизни
– `}</p>
                <p className={styles.p2}>это постоянное стремление вперЁд</p>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/Group1.svg" />
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
                  ХОТИТЕ СОТРУДНИЧАТЬ
                  <br />С НАМИ?
                </h1>
                <div className={styles.linkParent3}>
                  <div className={styles.link}>
                    <div className={styles.info4aoru}>8 800 543 77 41</div>
                  </div>
                  <div className={styles.link}>
                    <div className={styles.info4aoru}>info@4ao.ru</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.component5Icon}
                    alt=""
                    src="/Component-5@2x.png"
                  />
                  <input
                    className={styles.eMail}
                    placeholder="введите ваш e-mail"
                    type="text"
                  />
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.div3}>
                    Отправляя заявку, я даю согласие на обработку персональных
                    данных
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.aoruParent}>
              <div className={styles.aoru}>
                Вы принимаете условия политики в отношении обработки
                персональных данных и пользовательского соглашения каждый раз,
                когда оставляете свои данные в любой форме обратной связи
                на сайте 4ao.ru
              </div>
              <div className={styles.copyright2024Wrapper}>
                <div className={styles.copyright2024}>
                  © Copyright 2024. Все права защищены.
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
