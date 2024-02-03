import airplane from '../images/main-gallery/airplane.jpg'
import armcheir from '../images/main-gallery/armcheir.jpg'
import arms from '../images/main-gallery/arms.jpg'
import building from '../images/main-gallery/building.jpg'
import office from '../images/main-gallery/office.jpg'
import stairs from '../images/main-gallery/stairs.jpg'
import wheel from '../images/main-gallery/wheel.jpg'

import mountains from '../images/main-gallery/mountains_big.jpg'

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
