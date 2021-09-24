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
          <img src="/logo.svg" alt="background logo" />
        </div>
      </div>

      <header className={styles.header}>
        <a href="/"><h1><img src="/logo.png" alt="logo" /></h1></a>
        <nav role="navigation">
          <ul className={styles.header_menu}>
            <li className={styles.header_item}><a href="/about"><span>about</span></a>
              <div className={styles.underline}></div></li>
            <li className={`${styles.header_item} ${styles.header_disabled}`}><a href="/news"><span>news</span></a></li>
            <li className={`${styles.header_item} ${styles.header_disabled}`}><a href="/works"><span>works</span></a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h2>popol pol</h2>
          <div className={styles.about}><span>kawaiiはここに。</span></div>
          <div className={styles.sns_about}>
            <a href="https://twitter.com/popolpolnet" target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.sns_tw} icon={faTwitter} /></a>
            <a href="https://www.youtube.com/channel/UCzZ_GrnWlFvwJkoPECUGwtA" target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.sns_yt} icon={faYoutube} /></a>
          </div>
          <div className={styles.member_container}>
            <h3>member</h3>
            <div>
              <img src="https://pbs.twimg.com/profile_images/1298627863755681793/PcAMKnVG_400x400.jpg" alt="akgm3i" />
              <div>
                <span>楓上綵為</span>
                <span className={styles.rubi}>Sai Akigami</span>
                <a href="https://twitter.com/akgm3i" target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.sns_tw} icon={faTwitter} /></a>
              </div>
            </div>
            <div>
              <img src="https://pbs.twimg.com/profile_images/1441047915238092809/BrnQgkJM_400x400.jpg" alt="vibespeak" />
              <div>
                <span>Vibe$peak</span>
                <span className={styles.rubi}>Vibespeak</span>
                <a href="https://twitter.com/vibespeak" target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.sns_tw} icon={faTwitter} /></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >
  )
}

export default Home
