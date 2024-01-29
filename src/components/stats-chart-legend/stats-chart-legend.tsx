import { FC } from "react";
import styles from "./stats-chart-legend.module.scss";
import { LabelsWithDot } from "../../ui/lables/labels-with-dot/labels-with-dot";

type TStatsChartLegendInputData = {
  value?: number;
  title: string;
  color: string;
};

interface IStatsChartLegend {
  itemData: TStatsChartLegendInputData[];
}

export const StatsChartLegend: FC<IStatsChartLegend> = ({ itemData }) => {
  return (
    <div className={styles.container}>
      {itemData.map(({ color, title }, index) => {
        return <LabelsWithDot color={color} title={title} key={index} />;
      })}
    </div>
  );
};
