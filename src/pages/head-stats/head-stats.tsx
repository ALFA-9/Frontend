import { FC, useEffect } from "react";
import styles from "./head-stats.module.scss";
import StatsEmployeesList from "../../components/stats-employees-list/stats-employees-list";
import { nodesData } from "../../utils/_temp/const-employees-list-node_temp";
import PieChart from "../../ui/pie-chart/pie-chart";
import { statisticsFakeApi } from "../../utils/_temp/const-general-statistics";
import { StatsCommonCard } from "../../components/stats-common-card/stats-common-card";
import { StatsChartLegend } from "../../components/stats-chart-legend/stats-chart-legend";
import ButtonBack from "../../ui/buttons/button-back/button-back";
import { routes } from "../../utils/const-routes";
import { getAllEmployeesInMyUnit } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setErrorMessageMyUnitEmployees,
  setIsFailedMyUnitEmployees,
  setIsRequestMyUnitEmployees,
  setIsSuccessMyUnitEmployees,
  setMyUnitEmployees,
} from "../../redux/slices/employees-slice";

const HeadStats: FC = () => {
  const dispatch = useAppDispatch();
  const { id: currentUserId } = useAppSelector(
    (state) => state.activeUser.user
  );
  const { employees, isFailed, isRequest, isSuccess } = useAppSelector(
    (state) => state.myUnitEmployees
  );

  useEffect(() => {
    if (!isFailed && !isRequest && !isSuccess) {
      dispatch(setIsRequestMyUnitEmployees(true));
      getAllEmployeesInMyUnit()
        .then(({ data }) => {
          dispatch(setMyUnitEmployees(data));
          dispatch(setIsSuccessMyUnitEmployees(true));
        })
        .catch(({ message }) => {
          dispatch(setErrorMessageMyUnitEmployees(message));
          dispatch(setIsFailedMyUnitEmployees(true));
        })
        .finally(() => {
          dispatch(setIsRequestMyUnitEmployees(false));
        });
    }
  }, [isFailed, isRequest, isSuccess]);

  return (
    <>
      <ButtonBack path={routes.main} />
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
