import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>popol pol</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/iku6dnm.css" />
      </Head>

      <div className={styles.back_container}>
        <div className={styles.back}>
          <div className={styles.blue}></div>
          <div className={styles.pink}></div>
          <div className={styles.gleen}></div>
        </div>
        <div className={styles.back_logo}>
          <img src="/logo.svg" alt="" />
        </div>
      </div>

      <header className={styles.header_top}>
        <nav role="navigation">
          <ul className={styles.header_top_menu}>
            <li className={styles.header_top_item}><a href="/about"><span>about</span></a></li>
            <li className={`${styles.header_item} ${styles.header_disabled}`}><a href="/news"><span>news</span></a></li>
            <li className={`${styles.header_item} ${styles.header_disabled}`}><a href="/works"><span>works</span></a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>popol pol</h1>
        </div>
      </main>

      <div className={styles.sns}>
        <a href="https://twitter.com/popolpolnet" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.youtube.com/channel/UCzZ_GrnWlFvwJkoPECUGwtA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </div >
  )
}

export default Home
