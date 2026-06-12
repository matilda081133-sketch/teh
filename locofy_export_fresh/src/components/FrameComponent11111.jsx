import { useState } from "react";
import Link from "./Link";
import PropTypes from "prop-types";
import styles from "./FrameComponent11111.module.css";

const FrameComponent11111 = ({ className = "" }) => {
  const [linkItems] = useState([
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ Каталог оборудования ]",
    },
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ Услуги ]",
    },
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ Отрасли ]",
    },
  ]);
  const [linkItems1] = useState([
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ О компании ]",
    },
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ Бренды ]",
    },
    {
      status1: "Default",
      linkAlignSelf: "",
      linkJustifyContent: "",
      link: "[ Контакты ]",
    },
  ]);
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logoWrapper}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/Logo.svg"
            />
          </div>
          <div className={styles.frameContainer}>
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
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent2}>
                <div className={styles.linkContainer}>
                  <div className={styles.link}>
                    <div className={styles.div}>Ру</div>
                  </div>
                  <div className={styles.instanceWrapper}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/Vector-56.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper3}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/Group-145.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.link2}>
              <div className={styles.div}>8 800 543 77 41</div>
            </div>
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
