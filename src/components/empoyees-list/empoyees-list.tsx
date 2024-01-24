//@ts-nocheck

import React, { useState, useEffect } from 'react'
import { Tree } from 'primereact/tree'
//import { NodeService } from './service/NodeService'

export default function FilterDemo() {
  const [nodes, setNodes] = useState([])

  const data = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',

      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            {
              key: '0-0-0',
              label: 'Expenses.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Expenses Document',
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [
            {
              key: '0-1-0',
              label: 'Invoices.txt',
              icon: 'pi pi-fw pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Events',
      data: 'Events Folder',
      icon: 'pi pi-fw pi-calendar',
      children: [
        {
          key: '1-0',
          label: 'Meeting',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Meeting',
        },
        {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch',
        },
        {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review',
        },
      ],
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      icon: 'pi pi-fw pi-star-fill',
      children: [
        {
          key: '2-0',
          icon: 'pi pi-fw pi-star-fill',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            {
              key: '2-0-0',
              label: 'Scarface',
              icon: 'pi pi-fw pi-video',
              data: 'Scarface Movie',
            },
            {
              key: '2-0-1',
              label: 'Serpico',
              icon: 'pi pi-fw pi-video',
              data: 'Serpico Movie',
            },
          ],
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star-fill',
          data: 'De Niro Movies',
          children: [
            {
              key: '2-1-0',
              label: 'Goodfellas',
              icon: 'pi pi-fw pi-video',
              data: 'Goodfellas Movie',
            },
            {
              key: '2-1-1',
              label: 'Untouchables',
              icon: 'pi pi-fw pi-video',
              data: 'Untouchables Movie',
            },
          ],
        },
      ],
    },
  ]

  return (
    <div className='card flex flex-wrap justify-content-center gap-5'>
      <Tree
        nodeTemplate={nodeTemplate}
        value={data}
        filter
        filterMode='lenient'
        filterPlaceholder='Lenient Filter'
        className='w-full md:w-30rem'
      />
    </div>
  )
}

const nodeTemplate = (node, options) => {
  let label = <b>{node.data}</b>

  if (node.url) {
    label = (
      <a
        href={node.url}
        className='text-700 hover:text-primary'
        target='_blank'
        rel='noopener noreferrer'>
        {node.label}
      </a>
    )
  }

  return (
    <>
      <span className={options.className}>{label}</span>
      <div>+</div>
    </>
  )
}

const togglerTemplate = (node, options) => {
  if (!node) {
    return
  }

  const expanded = options.expanded
  const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
    'pi-caret-right': !expanded,
    'pi-caret-down': expanded,
  })

  return (
    <button
      type='button'
      className='p-tree-toggler p-link'
      tabIndex={-1}
      onClick={options.onClick}>
      <span className={iconClassName} aria-hidden='true'></span>
    </button>
  )
}
