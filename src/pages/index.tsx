import Head from 'next/head'
import Reversify from '../components/Reversify'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordsmith</title>
        <meta name="description" content="Sentence reversing service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title/>
        <Reversify/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
