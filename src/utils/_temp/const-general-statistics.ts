type TUnionsItemData = {
  title: string;
  value: number;
};

type IUnionsData = {
  title: string;
  itemsData: TUnionsItemData[];
};

export const statisticsFakeApi = {
  getAllUnitsData: (): IUnionsData => {
    return {
      title: "Вся структура",
      itemsData: [
        { title: "Штатная численность", value: 30 },
        { title: "Сотрудники", value: 25 },
        { title: "ИПР", value: 10 },
      ],
    };
  },

  getMyUnitData: (): IUnionsData => {
    return {
      title: "Мое подразделение",
      itemsData: [
        { title: "Штатная численность", value: 16 },
        { title: "Сотрудники", value: 16 },
        { title: "ИПР", value: 7 },
      ],
    };
  },

  getPieChartData: () => {
    return [
      {
        value: 50,
        title: "В работе",
        color: "rgba(47, 124, 246, 1)",
      },
      {
        value: 2,
        title: "Выполнен",
        color: "rgba(76, 161, 105, 1)",
      },
      {
        value: 30,
        title: "Не выполнен",
        color: "rgba(199, 51, 34, 1)",
      },
      {
        value: 18,
        title: "Отменен",
        color: "rgba(208, 111, 42, 1)",
      },
      {
        value: 21,
        title: "Отсутствует",
        color: "rgba(111, 121, 133, 1)",
      },
    ];
  },
};
