import airplane from '../images/main-gallery/airplane.jpeg'
import armcheir from '../images/main-gallery/armcheir.jpeg'
import arms from '../images/main-gallery/arms.jpeg'
import building from '../images/main-gallery/building.jpeg'
import office from '../images/main-gallery/office.jpeg'
import stairs from '../images/main-gallery/stairs.jpeg'
import wheel from '../images/main-gallery/wheel.jpeg'

import mountains from '../images/main-gallery/mountains_big.jpeg'

import { MainGalleryItemType } from '../types'

export const mainGalleryBigItem: MainGalleryItemType = {
  name: 'Всё про наш коворкинг в горах',
  src: mountains,
}

export const mainGalleryItems: MainGalleryItemType[] = [
  { name: 'Скидка на билеты в Казань', src: airplane },
  { name: 'Корпоративная скидка на кресла', src: armcheir },
  { name: 'День Донора', src: arms },
  { name: 'Лучшее предложение в России', src: building },
  { name: 'Открыли новый офис в Сочи', src: office },
  { name: 'ИПР для вашего продвижения по карьерной лестнице', src: stairs },
  { name: 'Велозабег на рассвете вдоль Невы', src: wheel },
]
