import { EmployeeType } from "../../api/api-types";

type TStatsChartInputData = {
  value: number;
  status: "in_work" | "done" | "failed" | "cancelled" | "missing";
  title: string;
  color: string;
};

export type StatsChartData = {
  allEmployees: TStatsChartInputData[];
  directEmployees: TStatsChartInputData[];
};

export const getChartData = (
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
    failed: {
      value: 0,
      status: "failed",
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
    failed: {
      value: 0,
      status: "failed",
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

  employees.forEach(({ status_idp, director }) => {
    const curAll = allEmployees[status_idp]?.value;
    if (typeof curAll === "number") {
      allEmployees[status_idp].value += 1;
      if (director === curUserId) {
        directEmployees[status_idp].value += 1;
      }
    } else {
      allEmployees.missing.value += 1;
      if (director === curUserId) {
        directEmployees.missing.value += 1;
      }
    }
  });

  return { allEmployees: Object.values(allEmployees), directEmployees: Object.values(directEmployees) };
};
