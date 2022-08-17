import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It&apos;s sportsball time!!</title>
        <meta name="description" content="It's sportsball time!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
