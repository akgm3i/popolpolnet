import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
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
          <Image
            src="/popol_logo.png"
            alt="popol pol"
            layout="fill"
            objectFit="contain"
            quality={100} />
        </div>
      </main>
    </div>
  )
}
