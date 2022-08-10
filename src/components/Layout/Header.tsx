import { Col, Row, Menu } from 'antd'
import MenuProps from './MenuProps'


const Header = () => {
  return (
    <Row justify='space-between' align='middle'>
      <Col span={4}>Blog</Col>
      <Col span={20} style={{display:'flex',justifyContent:'flex-end'}}>
        <Menu mode='horizontal' items={MenuProps} />
      </Col>
    </Row>
  )
}
export default Header
