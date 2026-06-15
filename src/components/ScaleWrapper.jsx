import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ScaleWrapper.module.css";

const DESIGN_WIDTH = 1920;

const ScaleWrapper = ({ children }) => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [innerHeight, setInnerHeight] = useState(0);

  const updateScale = useCallback(() => {
    const vw = window.innerWidth;
    const newScale = Math.min(1, vw / DESIGN_WIDTH);
    setScale(newScale);
  }, []);

  const updateHeight = useCallback(() => {
    if (innerRef.current) {
      setInnerHeight(innerRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  // Observe inner content height changes (images loading, dynamic content, etc.)
  useEffect(() => {
    updateHeight();

    if (!innerRef.current) return;

    const ro = new ResizeObserver(() => {
      updateHeight();
    });
    ro.observe(innerRef.current);

    return () => ro.disconnect();
  }, [updateHeight]);

  // Also update height when images finish loading
  useEffect(() => {
    const images = innerRef.current?.querySelectorAll("img");
    if (!images) return;

    const onLoad = () => updateHeight();
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", onLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoad);
      });
    };
  }, [updateHeight, children]);

  const outerHeight = innerHeight * scale;

  return (
    <div
      ref={outerRef}
      className={styles.scaleOuter}
      style={{ height: outerHeight > 0 ? `${outerHeight}px` : "auto" }}
    >
      <div
        ref={innerRef}
        className={styles.scaleInner}
        style={{
          width: `${DESIGN_WIDTH}px`,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScaleWrapper;
