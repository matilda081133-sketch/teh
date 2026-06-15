import FrameComponent11111 from "../components/FrameComponent11111";
import GroupComponent from "../components/GroupComponent";
import styles from "./Contacts.module.css";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contacts}>
      {/* Background grid lines */}
      <img className={styles.bgGrid} alt="" src="./Group-146.svg" />

      {/* Header */}
      <FrameComponent11111 />

      {/* Main content */}
      <div className={styles.content}>
        {/* Hero: title + map on same row, contact info below title but beside map */}
        <div className={styles.hero}>
          {/* Left column: title + contact info + button */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              НАШИ
              <br />
              КОНТАКТЫ
            </h1>

            {/* Contact details */}
            <div className={styles.contactInfo}>
              <div className={styles.contactColumn}>
                <h3 className={styles.contactLabel}>
                  Центральный офис
                  <br />
                  и R&D центр
                </h3>
                <div className={styles.contactText}>
                  <p>
                    Адрес:
                    <br />
                    125414, город Москва, ул. Фестивальная,
                    <br />
                    д. 44, эт 1 п III к 2 оф 3
                  </p>
                  <p>
                    Режим работы:
                    <br />
                    Понедельник - Пятница, 10:00 - 18:00
                  </p>
                  <p>Телефон: +79916668150</p>
                  <p>E-mail: a.eshkeev@gmail.com</p>
                </div>
              </div>

              <div className={styles.contactColumn}>
                <h3 className={styles.contactLabel}>
                  Юридическая информация
                </h3>
                <div className={styles.contactText}>
                  <p>
                    Для проведения комплаенс-процедур
                    <br />
                    и проверки контрагента.
                  </p>
                  <p>Наименование: АО &quot;ТЕХ&quot;</p>
                  <p>ИНН: 7712091353</p>
                  <p>ОГРН: 1027739083569</p>
                  <p>Дата регистрации: 22.10.1996</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className={styles.ctaButton}>оставить заявку</button>
          </div>

          {/* Right column: map */}
          <div className={styles.mapContainer}>
            <img
              className={styles.mapImage}
              alt="Карта — Москва, ул. Фестивальная, д. 44"
              src="./contacts-map.png"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerWrap}>
        <GroupComponent />
      </div>
    </div>
  );
};

export default Contacts;
