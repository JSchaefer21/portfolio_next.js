import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout title='About Jordi'>

    <div className={styles.container}>
      <h1>About me</h1>
    </div>
    </PageLayout>
  )
}
