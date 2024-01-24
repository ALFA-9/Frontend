import React, { FC, useMemo, useState } from 'react'
import { Input, Tree } from 'antd'
import type { TreeDataNode } from 'antd'
import style from './empoyees-list.module.scss'
import Jpg from '../../images/icons/logo.svg'
import { DownOutlined, MehOutlined } from '@ant-design/icons'

function example() {
  return <div>123</div>
}

const { Search } = Input

const x = 0
const y = 0
const z = 0
const defaultData: TreeDataNode[] = [
  {
    title: '123',
    key: 'Name0',
    icon: <MehOutlined />,
    children: [{ title: 'Name0-1', key: 'Name0-1', icon: <MehOutlined /> }],
  },
  { title: 'Name1', key: 'Name1', icon: <MehOutlined /> },
]

const generateData = (
  _level: number,
  _preKey?: React.Key,
  _tns?: TreeDataNode[]
) => {
  const preKey = _preKey || '0'
  const tns = _tns || defaultData

  const children: React.Key[] = []
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`
    tns.push({ title: key, key })
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(level, key, tns[index].children)
  })
}
generateData(z)

const dataList: { key: React.Key; title: string }[] = []
const generateList = (data: TreeDataNode[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const { key } = node
    dataList.push({ key, title: key as string })
    if (node.children) {
      generateList(node.children)
    }
  }
}
generateList(defaultData)

const getParentKey = (key: React.Key, tree: TreeDataNode[]): React.Key => {
  let parentKey: React.Key
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey!
}

const EmployeesList: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData)
        }
        return null
      })
      .filter(
        (item, i, self): item is React.Key =>
          !!(item && self.indexOf(item) === i)
      )
    setExpandedKeys(newExpandedKeys)
    setSearchValue(value)
    setAutoExpandParent(true)
  }

  const treeData = useMemo(() => {
    const loop = (data: TreeDataNode[]): TreeDataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string
        const index = strTitle.indexOf(searchValue)
        const beforeStr = strTitle.substring(0, index)
        const afterStr = strTitle.slice(index + searchValue.length)
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className={style['site-tree-search-value']}>
                {searchValue}
              </span>
              {afterStr}
            </span>
          ) : (
            <>
              <span>{strTitle}</span>
            </>
          )
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) }
        }

        return {
          title,
          key: item.key,
        }
      })

    return loop(defaultData)
  }, [searchValue])

  return (
    <div className={style.tree}>
      <Search
        style={{ marginBottom: 8 }}
        placeholder='Search'
        onChange={onChange}
      />
      <Tree
        showIcon
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
      />
    </div>
  )
}

export default EmployeesList
