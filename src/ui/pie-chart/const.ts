import { IPieChartRenderData, IPieChartSectorData } from "./types";

export const sectorDefault: IPieChartSectorData = {
  data: { value: -1, title: "", color: "" },
  dashArray: [0, 0],
  dashOffset: 0,
  textX: 0,
  textY: 0,
  sOffsetX: 0,
  sOffsetY: 0,
  percentage: 0,
  isVisiblePercentage: false,
};

export const renderDataDefault: IPieChartRenderData = {
  rData: [],
  radius: 0,
  drawThickness: 0,
  drawRadius: 0,
};
