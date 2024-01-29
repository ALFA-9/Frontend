import { FC } from "react";
import styles from "./stats-common-card.module.scss";

type TItemData = {
  title: string;
  value: number;
};

interface IStatsCommonCard {
  title: string;
  itemsData: TItemData[];
}

export const StatsCommonCard: FC<IStatsCommonCard> = ({ title, itemsData }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.container}>
        {itemsData.map((item, index) => (
          <div key={index} className={styles.itemContainer}>
            <p className={styles.itemTitle}>{item.title}</p>
            <p className={styles.itemValue}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
