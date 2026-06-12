import { useState } from "react";
import Component2 from "./Component2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent1111111.module.css";

const FrameComponent1111111 = ({ className = "" }) => {
  const [component2Items] = useState([
    {
      text: "3-6 осевые манипуляторы",
    },
    {
      text: "универсальные манипуляторы",
    },
    {
      text: "дельта роботы",
    },
    {
      text: "роботы-сборщики",
    },
  ]);
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.width388Height800Llts105ucParent}>
            <img
              className={styles.width388Height800Llts105ucIcon}
              loading="lazy"
              alt=""
              src="/width-388-height-800-llts105ucil4ierkr0vk39yy82qepk87-2@2x.png"
            />
            <img
              className={styles.component28Icon}
              alt=""
              src="/Component-32@2x.png"
            />
            <h2 className={styles.h2}>01</h2>
            <div className={styles.div}>[ 78 ]</div>
            <h1 className={styles.h1}>роботы манипуляторы</h1>
            <div className={styles.frameContainer}>
              <div className={styles.parent}>
                {component2Items.map((item, index) => (
                  <Component2 key={index} text={item.text} />
                ))}
              </div>
              <div className={styles.div2}>и многое другое</div>
            </div>
          </div>
          <div className={styles.frameChild} />
        </section>
        <section className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.group}>
            <h2 className={styles.h22}>02</h2>
            <div className={styles.container}>
              <div className={styles.div3}>[ 17 ]</div>
              <h2 className={styles.h23}>3д принтеры</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="/Component-32@2x.png"
            />
          </div>
        </section>
        <section className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>03</h2>
            <div className={styles.parent2}>
              <div className={styles.div3}>[ 09 ]</div>
              <h2 className={styles.h25}>термопластавтоматы</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="/Component-32@2x.png"
            />
          </div>
        </section>
        <FrameComponent1
          prop="04"
          prop1="[ 14 ]"
          prop2="фрезерные обрабатывающие центры"
        />
        <section className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>05</h2>
            <div className={styles.parent4}>
              <div className={styles.div3}>[ 34 ]</div>
              <h2 className={styles.h25}>токарные станки</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="/Component-32@2x.png"
            />
          </div>
        </section>
        <FrameComponent1
          prop="06"
          prop1="[ 314 ]"
          prop2={<><span style={{ whiteSpace: "nowrap" }}>инструмент и расходные</span><br />материалы</>}
        />
      </div>
    </section>
  );
};

FrameComponent1111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1111111;
