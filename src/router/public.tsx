import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'

import Layout from '../components/Layout'
// import { lazyImport } from '../utils/lazyImport'

// const { Home } = lazyImport(() => import('../home/index'), 'Home')

const Home = lazy(() => import('../home'))

const LayoutComponent = () => {
  return (
    <Layout>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
  )
}

export const publicRouters = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [{ path: '/home', element: <Home /> }]
  }
]
