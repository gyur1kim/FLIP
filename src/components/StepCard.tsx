import React from "react";
import styles from "./StepCard.module.css";

const StepCard = ({
  emphasis,
  title,
  description,
  render,
  style,
  theme = "default",
}: {
  emphasis?: string;
  title?: string;
  description?: string;
  render?: React.ReactNode;
  style?: React.CSSProperties;
  theme?: "default" | "warning" | "normal" | "success";
}) => {
  return (
    <div
      className={`${styles.stepCard} ${theme !== "default" ? styles[`stepCard-${theme}`] : ""}`}
      style={style}
    >
      {emphasis && <div className={styles.stepCardEmphasis}>{emphasis}</div>}
      {title && <div className={styles.stepCardTitle}>{title}</div>}
      {description && <div className={styles.stepCardDescription}>{description}</div>}
      {render}
    </div>
  );
};

export default StepCard;
