import { useState } from "react";
import Component2 from "./Component2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./FrameComponent1111111.module.css";
import { useTranslation } from "react-i18next";

const CATEGORY_IMAGES = {
  1: "./mission-3dprinters.png",
  2: "./mission-injection.png",
  3: "./mission-cnc.png",
  4: "./mission-lathe.png",
  5: "./mission-cutting.png",
};

const FrameComponent1111111 = ({ className = "" }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(null);

  const component2Items = [
    { text: t('catalog.item1') },
    { text: t('catalog.item2') },
    { text: t('catalog.item3') },
    { text: t('catalog.item4') },
  ];

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const renderTabImage = (index) => {
    if (activeTab !== index) return null;
    return (
      <div className={styles.tabImageWrapper}>
        <img
          className={styles.tabImage}
          src={CATEGORY_IMAGES[index]}
          alt=""
        />
      </div>
    );
  };

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        {/* 01 - Роботы-манипуляторы (оригинал, без изменений) */}
        <section className={styles.frameGroup}>
          <div className={styles.width388Height800Llts105ucParent}>
            <img
              className={styles.width388Height800Llts105ucIcon}
              loading="lazy"
              alt=""
              src="./width-388-height-800-llts105ucil4ierkr0vk39yy82qepk87-2@2x.png"
            />
            <img
              className={styles.component28Icon}
              alt=""
              src="./Component-32@2x.png"
            />
            <h2 className={styles.h2}>01</h2>
            <div className={styles.div}>[ 78 ]</div>
            <h1 className={styles.h1}>{t('catalog.manipulators')}</h1>
            <div className={styles.frameContainer}>
              <div className={styles.parent}>
                {component2Items.map((item, index) => (
                  <Component2 key={index} text={item.text} />
                ))}
              </div>
              <div className={styles.div2}>{t('catalog.andMore')}</div>
            </div>
          </div>
          <div className={styles.frameChild} />
        </section>

        {/* 02 - 3D принтеры */}
        <section
          className={styles.lineParent}
          onClick={() => handleTabClick(1)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.frameItem} />
          <div className={styles.group}>
            <h2 className={styles.h22}>02</h2>
            <div className={styles.container}>
              <div className={styles.div3}>[ 17 ]</div>
              <h2 className={styles.h23}>{t('catalog.printers')}</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="./Component-32@2x.png"
            />
          </div>
          {renderTabImage(1)}
        </section>

        {/* 03 - Инжекционное литье */}
        <section
          className={styles.lineParent}
          onClick={() => handleTabClick(2)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>03</h2>
            <div className={styles.parent2}>
              <div className={styles.div3}>[ 09 ]</div>
              <h2 className={styles.h25}>{t('catalog.injection')}</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="./Component-32@2x.png"
            />
          </div>
          {renderTabImage(2)}
        </section>

        {/* 04 - Фрезерные ЧПУ */}
        <section
          className={styles.lineParent}
          onClick={() => handleTabClick(3)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>04</h2>
            <div className={styles.parent2}>
              <div className={styles.div3}>[ 14 ]</div>
              <h2 className={styles.h25}>{t('catalog.milling')}</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="./Component-32@2x.png"
            />
          </div>
          {renderTabImage(3)}
        </section>

        {/* 05 - Токарно-фрезерные */}
        <section
          className={styles.lineParent}
          onClick={() => handleTabClick(4)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>05</h2>
            <div className={styles.parent4}>
              <div className={styles.div3}>[ 34 ]</div>
              <h2 className={styles.h25}>{t('catalog.turning')}</h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="./Component-32@2x.png"
            />
          </div>
          {renderTabImage(4)}
        </section>

        {/* 06 - Режущий инструмент */}
        <section
          className={styles.lineParent}
          onClick={() => handleTabClick(5)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.frameItem} />
          <div className={styles.frameDiv}>
            <h2 className={styles.h22}>06</h2>
            <div className={styles.parent2}>
              <div className={styles.div3}>[ 314 ]</div>
              <h2 className={styles.h25}>
                <span style={{ whiteSpace: "nowrap" }}>{t('catalog.tools1')}</span><br />{t('catalog.tools2')}
              </h2>
            </div>
            <img
              className={styles.component29Icon}
              alt=""
              src="./Component-32@2x.png"
            />
          </div>
          {renderTabImage(5)}
        </section>

      </div>
    </section>
  );
};

FrameComponent1111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1111111;
