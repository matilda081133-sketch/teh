import PropTypes from "prop-types";
import styles from "./AboutContacts.module.css";

const FrameComponent11111 = ({ className = "" }) => {
  return (
    <div className={[styles.inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <div className={styles.div}>/ Контакты</div>
              <div className={styles.rdParent}>
                <b className={styles.rd}>
                  {`Центральный офис `}
                  <br />
                  {`и R&D центр`}
                </b>
                <b className={styles.rd}>Юридическая информация</b>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.wrapper}>
              <div className={styles.div2}>
                Для проведения комплаенс-процедур и проверки контрагента.
              </div>
            </div>
            <div className={styles.iii23Parent}>
              <div className={styles.iii2Container}>
                <p className={styles.p}>
                  Адрес: <br />
                  125414, город Москва, ул. Фестивальная, д. 44, эт 1 п III к 2
                  оф 3 
                </p>
                <p className={styles.p}>
                  Режим работы:
                  <br />
                  Понедельник - Пятница, 10:00 - 18:00 
                </p>
                <p className={styles.p}>Телефон: +79916668150</p>
                <p className={styles.eMailAeshkeevgmailcom}>
                  E-mail: a.eshkeev@gmail.com
                </p>
              </div>
              <div className={styles.container}>
                <div className={styles.div3}>
                  <p className={styles.p}>Наименование: АО “ТЕХ”</p>
                  <p className={styles.p}>ИНН: 7712091353</p>
                  <p className={styles.p}>ОГРН: 1027739083569</p>
                  <p className={styles.eMailAeshkeevgmailcom}>
                    Дата регистрации: 22.10.1996
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="./Group-343@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent11111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11111;
