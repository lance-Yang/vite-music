import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
const { Footer, Content } = Layout

import Header from './Header'

const LayoutPage = ({ children }: { children: ReactNode }) => {

  return (
    <Layout style={{ height: '100vh' }}>
      <div className='layout_header'>
        <Header />
      </div>
      <Content className='layout_content'>
        <Outlet/>
      </Content>
      <Footer className='layout_footer'>Footer</Footer>
    </Layout>
  )
}
export default LayoutPage
