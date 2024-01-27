export interface IChartInputData {
  value: number;
  title: string;
  color: string;
}

export interface IPieChart {
  data: IChartInputData[];
  diameter: number;
  thickness: number;
  angleOffset?: number;
  textRadiusOffset?: number;
  minVisiblePercentage?: number;
  sectorOffset?: number;
}

export interface IPieChartSectorData {
  data: IChartInputData;
  dashArray: [number, number];
  dashOffset: number;
  textX: number;
  textY: number;
  percentage: number;
  isVisiblePercentage: boolean;
}

export interface IPieChartRenderData {
  rData: IPieChartSectorData[];
  radius: number;
  drawThickness: number;
  drawRadius: number;
  totalValue: number;
  drawLength: number;
  baseValue: number;
}
