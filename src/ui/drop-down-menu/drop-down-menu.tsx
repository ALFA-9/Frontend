import { FC } from 'react'
import styles from './drop-down-menu.module.scss'
import { DropDownMenuItemType } from '../../types'

interface DropDownMenuType {
  isOpen: boolean
  items: DropDownMenuItemType[]
}

const DropDownMenu: FC<DropDownMenuType> = ({ isOpen, items }) => {
  return (
    <ul
      className={`${styles.button_list} ${
        isOpen && styles.button_list_active
      }`}>
      {items.map((item, i) => (
        <DropDownMenuItem key={i} {...item} />
      ))}
    </ul>
  )
}

export default DropDownMenu

const DropDownMenuItem: FC<DropDownMenuItemType> = ({
  onClick,
  text,
  isDisabled,
  isRed,
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`${styles.button_list_item} ${
          isRed && styles.button_list_item_red
        }`}>
        {text}
      </button>
    </li>
  )
}
