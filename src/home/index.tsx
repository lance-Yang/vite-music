import { CardArticle } from '../components/Card'

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
      <CardArticle {...cardArticleProps} />
    </>
  )
}

export default Home
