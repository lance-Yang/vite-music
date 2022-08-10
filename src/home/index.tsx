import { Typography, Button } from 'antd'

import { CardArticle, Card } from '../components/Card'
import Icon from '../components/Icon'
import styles from './index.module.less'
import avatar from '../assets/avatar.jpg'

const { Title, Text } = Typography

const Home = () => {
  const cardArticleProps = {
    title: 'xxx',
    date: new Date(),
    commentNum: 0,
    content:
      ' Ant Design, a design language for background applications, isrefined by Ant UED Team. Ant Design, a design language forbackground applications, is refined by Ant UED Team. Ant Design,a design language for background applications, is refined by AntUED Team. Ant Design, a design language for backgroundapplications, is refined by Ant UED Team. Ant Design, a designlanguage for background applications, is refined by Ant UEDTeam. Ant',
    tag: 'Hexo'
  }

  return (
    <>
      <div className='content_left'>
        <CardArticle {...cardArticleProps} />
      </div>
      <div className='content_right'>
        <Card>
          <div className={styles.personal_header}>
            <img
              src={avatar}
              alt='avatar'
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
            <Title level={2}>xxxx</Title>
          </div>
          <div className={styles.personal_title}>
            <div>
              <div>
                <Text type='secondary'>文章</Text>{' '}
              </div>
              <div>
                <Text type='secondary'>11</Text>
              </div>
            </div>
            <div>
              <div>
                <Text type='secondary'>标签</Text>
              </div>
              <div>
                <Text type='secondary'>11</Text>
              </div>
            </div>
            <div>
              <div>
                <Text type='secondary'>分类</Text>
              </div>
              <div>
                <Text type='secondary'>11</Text>
              </div>
            </div>
          </div>
          <Button
            type='primary'
            icon={<Icon name='fa-github' />}
            style={{ width: '100%', marginTop: 16 }}
          >
            GitHub
          </Button>
        </Card>
        <Card>
          <div>
            {' '}
            <Icon className={styles.icon_shape} name='fa-bullhorn' /> 公告
          </div>
          <Text type='secondary'>This is my blog</Text>
        </Card>
      </div>
    </>
  )
}

export default Home
