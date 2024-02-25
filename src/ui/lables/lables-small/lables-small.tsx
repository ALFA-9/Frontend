import { FC } from 'react'
import styles from '../lables.module.scss'
import { LablesSmallEnum } from '../types'

interface LablesSmallType {
  text: string
  color: LablesSmallEnum
  extraStyles?: string
}

const LablesSmall: FC<LablesSmallType> = ({ text, color, extraStyles }) => {
  const text_color = color

  return (
    <p
      className={`${styles.text_small} ${extraStyles}  ${
        styles[`text_${LablesSmallEnum[text_color]}`]
      }`}
    >
      {text}
    </p>
  )
}

export default LablesSmall
