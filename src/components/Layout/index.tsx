import { Layout, Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import React, { ReactNode } from 'react'
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom'
const { Footer, Content } = Layout
import { Card } from '../Card'
import Header from './Header'
import LayoutRight from './LayoutRight'
import SpinLoading from '../Spinner'
import './index.css'


type MenuItem = Required<MenuProps>['items'][number];


const LayoutPage = ({ children }: { children?: ReactNode }) => {



  const items: MenuItem[] = [
    { key: 'music' , icon: <HomeOutlined/> , label:'发现音乐' }
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <div className='layout_header'>
        <Header />
      </div>
      <Content className='layout_content'>
        <div className='layout_menu'>
          <Menu
            mode="inline"
            // openKeys={openKeys}
            // onOpenChange={onOpenChange}
            items={items}
          />
        </div>
        <div className='layout_right'>

        </div>
      </Content>
      <Footer className='layout_footer'>Footer</Footer>
    </Layout>
  )
}
export default LayoutPage
