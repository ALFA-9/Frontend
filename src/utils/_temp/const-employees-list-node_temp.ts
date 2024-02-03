import jpeg from '../../images/_temp/template.jpeg'
import { TreeNodeMod } from '../../types'
export const nodesData: TreeNodeMod[] = [
  {
    id: '1',
    label: 'Ушат Помоев',
    key: '0',
    avatar: jpeg,
    subtitle: 'Умывальников начальник',
    status: 'in_work',
    children: [
      {
        id: '2',
        label: '0-0',
        avatar: jpeg,
        key: '0-0',
        children: [
          {
            id: '3',
            avatar: jpeg,
            label: '0-0-0',
            key: '0-0-0',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    avatar: jpeg,
    label: 'Поджёг Сараев',
    key: '1',
    subtitle: 'Мочалок командир',
    status: 'missing',
    children: [
      {
        id: '5',
        avatar: jpeg,
        label: '1-0',
        key: '1-0',
        children: [
          {
            id: '6',
            avatar: jpeg,
            label: '1-0-0',
            key: '1-0-0',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    avatar: jpeg,
    label: 'Барак Монголов',
    key: '2',
    subtitle: 'Генерал говнокомандующий',
    status: 'not_completed',
    children: [
      {
        id: '8',
        avatar: jpeg,
        label: '2-0',
        key: '2-0',
      },
    ],
  },
]

const flatten = (array: TreeNodeMod[]): TreeNodeMod[] => {
  let nodesDataFlat: TreeNodeMod[] = []

  const arr = array.map((item) => {
    if (item.children && item.children.length > 0) {
      nodesDataFlat = [
        ...nodesDataFlat,
        ...flatten(item.children),
        { ...item, children: [] },
      ]
    } else {
      nodesDataFlat = [...nodesDataFlat, item]
    }
  })
  return nodesDataFlat
}

const nodesDataFlat: TreeNodeMod[] = flatten(nodesData)
