import { useState } from 'react'
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import NotFound from '../../pages/not-found/not-found'

import classes from './app.module.scss'

interface obj {
  name?: string
  age?: number
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  const [count, setCount] = useState<number>(0)
  const [objI, setObjI] = useState<obj>({})

  function incrementCounter(): void {
    setCount((state) => state + 1)
  }

  function decrementCounter(): void {
    setCount((state) => state - 1)
  }

  function changeObj(): void {
    setObjI({
      age: 12,
      name: '12',
    })
  }

  return (
    <>
      <div>
        <button className={classes.button} onClick={incrementCounter}>
          +1
        </button>
        <div className={classes.text}>{count}</div>
        <button className={classes.button} onClick={decrementCounter}>
          -1
        </button>
        <Outlet />
      </div>
    </>
  )
}
