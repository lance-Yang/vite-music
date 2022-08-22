import { CardArticle } from '../components/Card'

import styles from './index.module.less'

import png1 from '../assets/imgs/1.png'
import png2 from '../assets/imgs/2.png'
import png3 from '../assets/imgs/3.png'
import png4 from '../assets/imgs/4.png'
import png5 from '../assets/imgs/5.png'
import png6 from '../assets/imgs/6.png'
import png7 from '../assets/imgs/7.png'

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
    <div className={styles.out}>
      <div className={styles.inner}>
        <div id={styles.first} className={styles.img}>
          <img src={png1} alt="" />
        </div>
        <div id={styles.second} className={styles.img}>
          <img src={png2} alt="" />
        </div>
        <div id={styles.right} className={styles.img}>
          <img src={png3} alt="" />
        </div>
        <div id={styles.left} className={styles.img}>
          <img src={png4} alt="" />
        </div>
        <div id={styles.left} className={styles.img}>
          <img src={png5} alt="" />
        </div>
        <div id={styles.left} className={styles.img}>
          <img src={png6} alt="" />
        </div>
        <div id={styles.last} className={styles.img}>
          <img src={png7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
