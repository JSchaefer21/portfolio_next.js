import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <Head>
          <title>J.Schaefer</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/person.ico" />
        </Head>

        <h1>My portfolio</h1>
        <Link href='/about'>ir a about</Link>  
      </div>
    </PageLayout>
  )
}
