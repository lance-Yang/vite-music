import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
const { Footer, Content } = Layout

import Header from './Header'
import LayoutRight from './LayoutRight'
import SpinLoading from '../Spinner'

const LayoutPage = ({ children }: { children?: ReactNode }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <div className='layout_header'>
        <Header />
      </div>
      <Content className='layout_content'>
        <div className='content_left'>
          <React.Suspense fallback={<SpinLoading />}>
            <Outlet />
          </React.Suspense>
        </div>
        <div className='content_right'>
          <LayoutRight />
        </div>
      </Content>
      <Footer className='layout_footer'>Footer</Footer>
    </Layout>
  )
}
export default LayoutPage
