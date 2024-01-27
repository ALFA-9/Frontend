import {
  IChartInputData,
  IPieChartRenderData,
  IPieChartSectorData,
} from "./types";

export const getRenderData = (
  data: IChartInputData[],
  diameter: number,
  thickness: number,
  angleOffset: number,
  textRadiusOffset: number,
  minVisiblePercentage: number,
  sectorOffset: number
): IPieChartRenderData => {
  const radius = diameter / 2;
  const drawThickness =
    thickness !== null ? (thickness < radius ? thickness : radius) : radius;

  const drawRadius = radius - Number(drawThickness) / 2;
  const totalValue = data?.reduce((acc, item) => acc + item.value, 0);
  const drawLength = 2 * Math.PI * drawRadius;
  const baseValue = drawLength / totalValue;
  const textRadius = drawRadius + textRadiusOffset;
  let offset = -1 * ((drawLength / 360) * angleOffset);
  let accAngle = ((2 * Math.PI) / 360) * angleOffset;
  const rData = data.map((item) => {
    const curVal = Math.round(item.value * baseValue * 10000) / 10000;
    const percentage = item.value / totalValue;
    const curAngle = 2 * Math.PI * percentage;
    const drawAngle = accAngle + curAngle / 2;
    const res: IPieChartSectorData = {
      data: { ...item },
      dashArray: [curVal, drawLength - curVal],
      dashOffset: offset,
      textX: radius + Math.cos(drawAngle) * textRadius + sectorOffset * 1.25,
      textY: radius + Math.sin(drawAngle) * textRadius + sectorOffset * 1.25,
      sOffsetX: Math.cos(drawAngle) * sectorOffset,
      sOffsetY: Math.sin(drawAngle) * sectorOffset,
      percentage,
      isVisiblePercentage: Math.round(percentage * 100) >= minVisiblePercentage,
    };
    offset -= res.dashArray[0];
    accAngle += curAngle;
    return res;
  });

  return {
    radius,
    drawThickness,
    drawRadius,
    rData,
  };
};
