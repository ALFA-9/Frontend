import { TreeNodeMod } from '../types'

export const nodesData: TreeNodeMod[] = [
  {
    id: '1',
    label: '0',
    key: '0',
    subtitle: 'Умывальников начальник',
    children: [
      {
        id: '1',
        label: '0-0',
        subtitle: 'Мочалок командир',
        key: '0-0',
        children: [
          {
            id: '1',
            label: '0-0-0',
            key: '0-0-0',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    label: '1',
    key: '1',
    children: [
      {
        id: '1',
        label: '1-0',
        key: '1-0',
        children: [
          {
            id: '1',
            label: '1-0-0',
            key: '1-0-0',
          },
        ],
      },
    ],
  },
]
