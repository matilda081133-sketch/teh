import PropTypes from "prop-types";
import styles from "./FrameComponent111111111.module.css";

const partners = [
  { type: 'partner', img: './Group-350.svg', imgClass: styles.partnerChild },
  { type: 'partner2', img: './Group-349.svg', imgClass: styles.partnerItem },
  { type: 'partner3', img: './Group2.svg', imgClass: styles.groupIcon },
  { type: 'partner2', img: './Group-352.svg', imgClass: styles.partnerInner },
  { type: 'partner3', img: './Group-240.svg', imgClass: styles.partnerChild2 },
  { type: 'partner2', img: './Group-351.svg', imgClass: styles.partnerInner },
  { type: 'partner3', img: './Group3.svg', imgClass: styles.groupIcon2 },
];

const FrameComponent111111111 = ({ className = "" }) => {
  const renderPartners = () => partners.map((p, i) => (
    <div key={i} className={styles[p.type]}>
      <img className={p.imgClass} loading="lazy" alt="" src={p.img} />
    </div>
  ));

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>100+</h1>
      </div>
      <div className={styles.partnerParent}>
        <div className={styles.marqueeTrack}>
          {renderPartners()}
          {renderPartners()}
        </div>
      </div>
    </section>
  );
};

FrameComponent111111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent111111111;
