import { stat } from "fs";
import { EmployeeType } from "../../api/api-types";

export type TStatsChartInputData = {
  value: number;
  status: "in_work" | "done" | "not_completed" | "cancelled" | "missing";
  title: string;
  color: string;
};

export type TStatData = {
  title: string;
  itemsData: { title: string; value: number }[];
};

export type StatsChartData = {
  allEmployees: TStatsChartInputData[];
  directEmployees: TStatsChartInputData[];
  statAll: TStatData;
  statDirect: TStatData;
};

export const getStatsAndChartData = (
  employees: EmployeeType[],
  curUserId: number
): StatsChartData => {
  const allEmployees: Record<string, TStatsChartInputData> = {
    in_work: {
      value: 0,
      status: "in_work",
      title: "В работе",
      color: "rgba(47, 124, 246, 1)",
    },
    done: {
      value: 0,
      status: "done",
      title: "Выполнен",
      color: "rgba(76, 161, 105, 1)",
    },
    not_completed: {
      value: 0,
      status: "not_completed",
      title: "Не выполнен",
      color: "rgba(199, 51, 34, 1)",
    },
    cancelled: {
      value: 0,
      status: "cancelled",
      title: "Отменен",
      color: "rgba(208, 111, 42, 1)",
    },
    missing: {
      value: 0,
      status: "missing",
      title: "Отсутствует",
      color: "rgba(111, 121, 133, 1)",
    },
  };

  const directEmployees: Record<string, TStatsChartInputData> = {
    in_work: {
      value: 0,
      status: "in_work",
      title: "В работе",
      color: "rgba(47, 124, 246, 1)",
    },
    done: {
      value: 0,
      status: "done",
      title: "Выполнен",
      color: "rgba(76, 161, 105, 1)",
    },
    not_completed: {
      value: 0,
      status: "not_completed",
      title: "Не выполнен",
      color: "rgba(199, 51, 34, 1)",
    },
    cancelled: {
      value: 0,
      status: "cancelled",
      title: "Отменен",
      color: "rgba(208, 111, 42, 1)",
    },
    missing: {
      value: 0,
      status: "missing",
      title: "Отсутствует",
      color: "rgba(111, 121, 133, 1)",
    },
  };

  const statAll = {
    title: "Мое подразделение",
    itemsData: [
      { title: "Штатная численность", value: 0 },
      { title: "Сотрудники", value: 0 },
      { title: "ИПР", value: 0 },
    ],
  };

  const statDirect = {
    title: "Сотрудники прямого подчинения",
    itemsData: [
      { title: "Штатная численность", value: 0 },
      { title: "Сотрудники", value: 0 },
      { title: "ИПР", value: 0 },
    ],
  };

  employees.forEach(({ status_idp, director }) => {
    const curAll = allEmployees[status_idp]?.value;
    statAll.itemsData[0].value += 1;
    statAll.itemsData[1].value += 1;
    if (director === curUserId) {
      statDirect.itemsData[0].value += 1;
      statDirect.itemsData[1].value += 1;
    }
    if (status_idp !== 'missing') {
      allEmployees[status_idp].value += 1;
      statAll.itemsData[2].value += 1;
      if (director === curUserId) {
        directEmployees[status_idp].value += 1;
        statDirect.itemsData[2].value += 1;
      }
    } else {
      allEmployees.missing.value += 1;
      if (director === curUserId) {
        directEmployees.missing.value += 1;
      }
    }
  });

  return {
    allEmployees: Object.values(allEmployees),
    directEmployees: Object.values(directEmployees),
    statAll,
    statDirect,
  };
};
