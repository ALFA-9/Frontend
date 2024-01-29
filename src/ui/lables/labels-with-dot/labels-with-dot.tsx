import { FC } from "react";
import styles from "./labels-with-dot.module.scss";

interface ILabelsWithDot {
  color: string;
  title: string;
}

export const LabelsWithDot: FC<ILabelsWithDot> = ({ color, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dot} style={{ backgroundColor: color }}></div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
