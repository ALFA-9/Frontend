import jpeg from '../../images/_temp/template.jpeg'
import { TreeNodeMod } from '../../types'

export const nodesData: TreeNodeMod[] = [
  {
    id: '0',
    label: 'Ушат Помоев',
    key: '0',
    avatar: jpeg,
    subtitle: 'Умывальников начальник',
    status: 'in_progress',
    children: [
      {
        id: '0-0',
        label: '0-0',
        avatar: jpeg,
        key: '0-0',
        children: [
          {
            id: '0-0-0',
            avatar: jpeg,
            label: '0-0-0',
            key: '0-0-0',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    avatar: jpeg,
    label: 'Поджёг Сараев',
    key: '1',
    subtitle: 'Мочалок командир',
    status: 'missing',
    children: [
      {
        id: '1-0',
        avatar: jpeg,
        label: '1-0',
        key: '1-0',
        children: [
          {
            id: '1-0-0',
            avatar: jpeg,
            label: '1-0-0',
            key: '1-0-0',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    avatar: jpeg,
    label: 'Барак Монголов',
    key: '2',
    subtitle: 'Генерал говнокомандующий',
    status: 'failed',
    children: [
      {
        id: '2-0',
        avatar: jpeg,
        label: '2-0',
        key: '2-0',
      },
    ],
  },
]
