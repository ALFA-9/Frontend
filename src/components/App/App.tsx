import styles from './app.module.scss';
import { useState, FC } from 'react';
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Layout from '../layout/layout';
import NotFound from '../../pages/not-found/not-found';


interface obj {
  name?: string
  age?: number
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: []
  }
]);

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default App;
