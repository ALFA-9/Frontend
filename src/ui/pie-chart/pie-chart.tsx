import { FC, useEffect, useMemo, useState } from "react";
import { IPieChart, IPieChartRenderData, IPieChartSectorData } from "./types";
import { getRenderData } from "./utils";
import styles from "./pie-chart.module.scss";

const sectorDefault: IPieChartSectorData = {
  data: { value: -1, title: "", color: "" },
  dashArray: [0, 0],
  dashOffset: 0,
  textX: 0,
  textY: 0,
  percentage: 0,
  isVisiblePercentage: false,
};

// const sectorOffset = 15;

const PieChart: FC<IPieChart> = ({
  data,
  diameter,
  thickness = null,
  angleOffset = 0,
  textRadiusOffset = 0,
  minVisiblePercentage = 0,
  sectorOffset = 15,
}) => {
  const [
    {
      rData,
      radius,
      drawThickness,
      drawRadius,
      totalValue,
      drawLength,
      baseValue,
    },
    setRData,
  ] = useState<IPieChartRenderData>({
    rData: [],
    radius: 0,
    drawThickness: 0,
    drawRadius: 0,
    totalValue: 0,
    drawLength: 0,
    baseValue: 0,
  });

  const [sData, setSData] = useState<IPieChartRenderData>({
    rData: [],
    radius: 0,
    drawThickness: 0,
    drawRadius: 0,
    totalValue: 0,
    drawLength: 0,
    baseValue: 0,
  });

  const [hSector, setHSector] = useState<IPieChartSectorData>(sectorDefault);
  const [sSector, setSSector] = useState<IPieChartSectorData>(sectorDefault);

  useEffect(() => {
    setRData(
      getRenderData(
        data,
        diameter,
        thickness,
        angleOffset,
        textRadiusOffset,
        minVisiblePercentage
      )
    );

    setSData(
      getRenderData(
        data,
        diameter + sectorOffset * 2,
        thickness,
        angleOffset,
        textRadiusOffset,
        minVisiblePercentage
      )
    );
  }, []);
  return (
    <>
      <svg
        className={styles.border}
        width={diameter + sectorOffset * 3}
        height={diameter + sectorOffset * 3}
        viewBox={`0 0 ${diameter + sectorOffset * 3} ${
          diameter + sectorOffset * 3
        } `}
      >
        {rData.length &&
          rData.map((item, index) => {
            return item.data.title !== sSector.data.title ? (
              <g
                key={index}
                className={styles.gcont}
                onMouseEnter={(e) => setHSector(item)}
                onMouseLeave={(e) => setHSector(sectorDefault)}
                onClick={(e) => setSSector(item)}
              >
                <circle
                  cx={radius + sectorOffset * 1.5}
                  cy={radius + sectorOffset * 1.5}
                  r={drawRadius}
                  stroke={item.data.color}
                  fill="none"
                  strokeWidth={
                    hSector.data.title === item.data.title
                      ? drawThickness + sectorOffset / 2
                      : drawThickness
                  }
                  strokeDashoffset={item.dashOffset}
                  strokeDasharray={item.dashArray.join(" ")}
                ></circle>

                <text
                  className={styles.text}
                  x={item.textX + sectorOffset * 1.5}
                  y={item.textY + sectorOffset * 1.5}
                  dominant-baseline="middle"
                  text-anchor="middle"
                >
                  {`${Math.round(item.percentage * 100)}%`}
                </text>
              </g>
            ) : (
              <></>
            );
          })}

        {sData.rData.length &&
          sData.rData.map((item, index) => {
            return item.data.title === sSector.data.title ? (
              <g
                key={index}
                className={styles.gcont}
                onClick={(e) => {
                  setSSector(sectorDefault);
                  setHSector(sectorDefault);
                }}
              >
                <circle
                  cx={radius + sectorOffset * 1.5}
                  cy={radius + sectorOffset * 1.5}
                  r={sData.drawRadius}
                  stroke={item.data.color}
                  fill="none"
                  strokeWidth={sData.drawThickness + sectorOffset / 2}
                  strokeDashoffset={item.dashOffset - sectorOffset / 2}
                  strokeDasharray={[
                    item.dashArray[0] - sectorOffset,
                    item.dashArray[1] + sectorOffset / 2,
                  ].join(" ")}
                ></circle>
                <text
                  className={styles.text}
                  x={item.textX + sectorOffset / 2}
                  y={item.textY + sectorOffset / 2}
                  dominant-baseline="middle"
                  text-anchor="middle"
                >
                  {`${Math.round(item.percentage * 100)}%`}
                </text>
              </g>
            ) : (
              <></>
            );
          })}
      </svg>
    </>
  );
};

export default PieChart;
