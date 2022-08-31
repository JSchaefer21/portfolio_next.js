import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import Projects from '../Components/Projects.jsx'
import Footer from '../Components/Footer.jsx'

export default function Index() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <Head>
          <title>J.Schaefer</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/person.ico" />
        </Head>

        <Link href='/about'>ir a about</Link>  

        <Projects/>
        <Footer/>

      </div>
    </PageLayout>
  )
}
