import { FC, useEffect, useMemo, useState } from 'react'
import { IPieChart, IPieChartRenderData, IPieChartSectorData } from './types'
import { getRenderData } from './utils'
import styles from './pie-chart.module.scss'
import { renderDataDefault, sectorDefault } from './const'

const PieChart: FC<IPieChart> = ({
  data,
  diameter,
  thickness = null,
  angleOffset = 0,
  textRadiusOffset = 0,
  minVisiblePercentage = 0,
  sectorOffset = 15,
}) => {
  const [{ rData, radius, drawThickness, drawRadius }, setRData] =
    useState<IPieChartRenderData>(renderDataDefault)

  const [hSector, setHSector] = useState<IPieChartSectorData>(sectorDefault)
  const [sSector, setSSector] = useState<IPieChartSectorData>(sectorDefault)

  const mainSize = useMemo(
    () => diameter + sectorOffset * 2.5,
    [diameter, sectorOffset]
  )

  const centerOffset = useMemo(
    () => radius + sectorOffset * 1.25,
    [radius, sectorOffset]
  )

  useEffect(() => {
    setRData(
      getRenderData(
        data,
        diameter,
        thickness,
        angleOffset,
        textRadiusOffset,
        minVisiblePercentage,
        sectorOffset
      )
    );
  }, [data]);

  return (
    <>
      <svg
        width={mainSize}
        height={mainSize}
        viewBox={`0 0 ${mainSize} ${mainSize} `}>
        {rData.length &&
          rData.map((item, index) => {
            const isSelected = sSector.data.title === item.data.title
            const isHovered = hSector.data.title === item.data.title
            const percentage = Math.round(item.percentage * 100)
            return (
              <g
                key={index}
                className={styles.gContainer}
                onMouseEnter={(e) => setHSector(item)}
                onMouseLeave={(e) => setHSector(sectorDefault)}
                onClick={(e) => setSSector(isSelected ? sectorDefault : item)}>
                <circle
                  cx={centerOffset + (isSelected ? item.sOffsetX : 0)}
                  cy={centerOffset + (isSelected ? item.sOffsetY : 0)}
                  r={drawRadius}
                  stroke={item.data.color}
                  strokeWidth={
                    isHovered || isSelected
                      ? drawThickness + sectorOffset / 2
                      : drawThickness
                  }
                  strokeDashoffset={item.dashOffset}
                  strokeDasharray={item.dashArray.join(' ')}
                  fill='none'></circle>

                <text
                  className={styles.text}
                  x={item.textX + (isSelected ? item.sOffsetX : 0)}
                  y={item.textY + (isSelected ? item.sOffsetY : 0)}
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {`${item.isVisiblePercentage ? percentage + "%" : ""}`}
                </text>
              </g>
            )
          })}
      </svg>
    </>
  )
}

export default PieChart
