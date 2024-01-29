import { FC } from "react";
import styles from "./head-stats.module.scss";
import StatsEmployeesList from "../../components/stats-employees-list/stats-employees-list";
import { nodesData } from "../../utils/_temp/const-employees-list-node_temp";
import PieChart from "../../ui/pie-chart/pie-chart";
import { statisticsFakeApi } from "../../utils/_temp/const-general-statistics";
import { StatsCommonCard } from "../../components/stats-common-card/stats-common-card";
import { StatsChartLegend } from "../../components/stats-chart-legend/stats-chart-legend";

const HeadStats: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Статистика ИПР сотрудников</h1>
      <div className={styles.topContainer}>
        <div className={styles.cardContainer}>
          <StatsCommonCard {...statisticsFakeApi.getAllUnitsData()} />
          <StatsCommonCard {...statisticsFakeApi.getMyUnitData()} />
        </div>

        <PieChart
          data={statisticsFakeApi.getPieChartData()}
          diameter={240}
          thickness={60}
          angleOffset={-90}
          sectorOffset={14}
          minVisiblePercentage={1}
        />
        <StatsChartLegend itemData={statisticsFakeApi.getPieChartData()} />
      </div>

      <StatsEmployeesList nodesData={nodesData} />
    </>
  );
};

export default HeadStats;
