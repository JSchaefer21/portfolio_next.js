import Head from 'next/head'
import Projects from '../components/Projects.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function Index() {
  return (
      <>
        <Head>
          <title>J.Schaefer</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href="/person.ico" />
        </Head>

        <Header/>
        <Projects/>
        <Footer/>
      </>
  )
}
