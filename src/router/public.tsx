import { Suspense, lazy } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import Layout from '../components/Layout'
import SpinLoading from '../components/Spinner'
// import { lazyImport } from '../utils/lazyImport'

// const { Home } = lazyImport(() => import('../home/index'), 'Home')
import NotFound from '../components/404'
const Home = lazy(() => import('../home'))
const About = lazy(() => import('../about'))

const LayoutComponent = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export const publicRouters = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]
