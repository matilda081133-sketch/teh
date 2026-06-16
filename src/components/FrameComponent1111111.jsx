import { useState } from "react";
import Component2 from "./Component2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent1111111.module.css";
import { useTranslation } from "react-i18next";

const CATEGORY_IMAGES = {
  0: "./width-388-height-800-llts105ucil4ierkr0vk39yy82qepk87-2@2x.png",
  1: "./mission-3dprinters.png",
  2: "./mission-injection.png",
  3: "./mission-cnc.png",
  4: "./mission-lathe.png",
  5: "./mission-cutting.png",
};

const FrameComponent1111111 = ({ className = "" }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const component2Items = [
    { text: t('catalog.item1') },
    { text: t('catalog.item2') },
    { text: t('catalog.item3') },
    { text: t('catalog.item4') },
  ];

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>

        {/* 01 - Роботы-манипуляторы */}
        <section
          className={activeTab === 0 ? styles.frameGroup : styles.frameGroupCollapsed}
          onClick={() => setActiveTab(0)}
          style={{ cursor: "pointer" }}
        >
          <div className={activeTab === 0 ? styles.width388Height800Llts105ucParent : styles.width388Height800Llts105ucParentCollapsed}>
            {activeTab === 0 && (
              <img
                className={styles.width388Height800Llts105ucIcon}
                loading="lazy"
                alt=""
                src={CATEGORY_IMAGES[0]}
              />
            )}
            <img className={styles.component28Icon} alt="" src="./Component-32@2x.png" />
            <h2 className={styles.h2}>01</h2>
            <div className={styles.div}>[ 78 ]</div>
            <h1 className={styles.h1}>{t('catalog.manipulators')}</h1>
            {activeTab === 0 && (
              <div className={styles.frameContainer}>
                <div className={styles.parent}>
                  {component2Items.map((item, index) => (
                    <Component2 key={index} text={item.text} />
                  ))}
                </div>
                <div className={styles.div2}>{t('catalog.andMore')}</div>
              </div>
            )}
          </div>
          <div className={styles.frameChild} />
        </section>

        {/* 02 - 3D принтеры */}
        <section className={styles.lineParent} onClick={() => setActiveTab(1)} style={{ cursor: "pointer" }}>
          {activeTab === 1 && <img className={styles.tabImage} src={CATEGORY_IMAGES[1]} alt="" />}
          <div className={styles.frameItem} />
          <div className={styles.group}>
            <h2 className={styles.h22}>02</h2>
            <div className={styles.container}>
              <div className={styles.div3}>[ 17 ]</div>
              <h2 className={styles.h23}>{t('catalog.printers')}</h2>
            </div>
            <img className={styles.component29Icon} alt="" src="./Component-32@2x.png" />
          </div>
        </section>

        {/* 03 - Инжекционное литье */}
        <section className={styles.lineParent} onClick={() => setActiveTab(2)} style={{ cursor: "pointer" }}>
          {activeTab === 2 && <img className={styles.tabImage} src={CATEGORY_IMAGES[2]} alt="" />}
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>03</h2>
            <div className={styles.parent2}>
              <div className={styles.div3}>[ 09 ]</div>
              <h2 className={styles.h25}>{t('catalog.injection')}</h2>
            </div>
            <img className={styles.component29Icon} alt="" src="./Component-32@2x.png" />
          </div>
        </section>

        {/* 04 - Фрезерные ЧПУ */}
        <FrameComponent1
          prop="04"
          prop1="[ 14 ]"
          prop2={t('catalog.milling')}
          onClick={() => setActiveTab(3)}
          isActive={activeTab === 3}
          activeImage={CATEGORY_IMAGES[3]}
        />

        {/* 05 - Токарно-фрезерные */}
        <section className={styles.lineParent} onClick={() => setActiveTab(4)} style={{ cursor: "pointer" }}>
          {activeTab === 4 && <img className={styles.tabImage} src={CATEGORY_IMAGES[4]} alt="" />}
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>05</h2>
            <div className={styles.parent4}>
              <div className={styles.div3}>[ 34 ]</div>
              <h2 className={styles.h25}>{t('catalog.turning')}</h2>
            </div>
            <img className={styles.component29Icon} alt="" src="./Component-32@2x.png" />
          </div>
        </section>

        {/* 06 - Режущий инструмент */}
        <FrameComponent1
          prop="06"
          prop1="[ 314 ]"
          prop2={<><span style={{ whiteSpace: "nowrap" }}>{t('catalog.tools1')}</span><br />{t('catalog.tools2')}</>}
          onClick={() => setActiveTab(5)}
          isActive={activeTab === 5}
          activeImage={CATEGORY_IMAGES[5]}
        />

      </div>
    </section>
  );
};

FrameComponent1111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1111111;
