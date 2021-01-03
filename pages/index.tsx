import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>popol pol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.back}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>

      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            alt='popol'
            src="/popol_logo.png"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
