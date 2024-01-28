import { FC } from 'react'
import styles from '../lables.module.scss'
import { LablesSmallEnum } from '../types'

interface LablesSmallType {
  text: string
  color: LablesSmallEnum
  extraStyles?: string
}

const LablesBig: FC<LablesSmallType> = ({ text, color, extraStyles }) => {
  const text_color = color

  return (
    <p
      className={`${styles.text_big} ${extraStyles}  ${
        styles[`text_${LablesSmallEnum[text_color]}`]
      }`}>
      {text}
    </p>
  )
}

export default LablesBig
