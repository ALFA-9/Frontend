import { FC, useEffect, useState } from "react";
import styles from "./head-stats.module.scss";
import StatsEmployeesList from "../../components/stats-employees-list/stats-employees-list";
import { nodesData } from "../../utils/_temp/const-employees-list-node_temp";
import PieChart from "../../ui/pie-chart/pie-chart";
import { statisticsFakeApi } from "../../utils/_temp/const-general-statistics";
import { StatsCommonCard } from "../../components/stats-common-card/stats-common-card";
import { StatsChartLegend } from "../../components/stats-chart-legend/stats-chart-legend";
import ButtonBack from "../../ui/buttons/button-back/button-back";
import { routes } from "../../utils/const-routes";
import { getAllEmployeesInMyUnit, getIdp, getIdpDataById } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setErrorMessageMyUnitEmployees,
  setIsFailedMyUnitEmployees,
  setIsRequestMyUnitEmployees,
  setIsSuccessMyUnitEmployees,
  setMyUnitEmployees,
} from "../../redux/slices/employees-slice";
import { Spinner } from "@alfalab/core-components-spinner";
import {
  TStatData,
  TStatsChartInputData,
  getStatsAndChartData,
} from "./head-stats.utils";

const HeadStats: FC = () => {
  const dispatch = useAppDispatch();
  const [option, setOption] = useState<"all" | "direct">("all");
  const [chartData, setChartData] = useState<{
    allEmployees: TStatsChartInputData[];
    directEmployees: TStatsChartInputData[];
  }>({
    allEmployees: [],
    directEmployees: [],
  });

  const [statData, setStatData] = useState<{
    allEmployees: TStatData;
    directEmployees: TStatData;
  }>({
    allEmployees: { title: "", itemsData: [] },
    directEmployees: { title: "", itemsData: [] },
  });

  const { id: currentUserId } = useAppSelector(
    (state) => state.activeUser.user
  );
  const { employees, isFailed, isRequest, isSuccess, errorMessage } =
    useAppSelector((state) => state.myUnitEmployees);

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

  useEffect(() => {
    if (isSuccess) {
      const { allEmployees, directEmployees, statAll, statDirect } =
      getStatsAndChartData(employees, currentUserId);

        setChartData({ allEmployees, directEmployees });
        setStatData({ allEmployees:statAll, directEmployees:statDirect });
    }
  }, [isSuccess]);

  return (
    <>
      <ButtonBack path={routes.main} />
      <h1 className={styles.title}>Статистика ИПР сотрудников</h1>
      <Spinner visible={isRequest} size="m" />
      {isFailed && <p>{errorMessage}</p>}
      {isSuccess && (
        <>
          <div className={styles.topContainer}>
            <div className={styles.cardContainer}>
              <StatsCommonCard
                onClickHandler={setOption}
                option={option}
                id="all"
                {...statData.allEmployees}
              />

              <StatsCommonCard
                onClickHandler={setOption}
                option={option}
                id="direct"
                {...statData.directEmployees}
              />
            </div>

            <PieChart
              data={
                option === "all"
                  ? chartData.allEmployees
                  : chartData.directEmployees
              }
              diameter={240}
              thickness={60}
              angleOffset={-90}
              sectorOffset={14}
              minVisiblePercentage={1}
            />
            <StatsChartLegend
              itemData={
                option === "all"
                  ? chartData.allEmployees
                  : chartData.directEmployees
              }
            />
          </div>

          <StatsEmployeesList nodesData={employees} />
        </>
      )}
    </>
  );
};

export default HeadStats;
