import { BASE_URL } from '../../api/api'
import { SubordinatesType } from '../../api/api-types'
import { TreeNodeMod } from '../../types'

export function changeType(
  {
    first_name,
    last_name,
    patronymic,
    id,
    subordinates,
    post,
    image,
  }: SubordinatesType,
  lvl: number
): TreeNodeMod {
  return {
    id: id + '',
    lvl: lvl,
    label: `${last_name} ${first_name} ${patronymic}`,
    avatar: 'https://api.new.red-hand.ru/' + image,
    subtitle: post,
    key: id + '',
    children:
      subordinates?.length > 0
        ? subordinates.map((item) => changeType(item, lvl + 1))
        : [],
  }
}
