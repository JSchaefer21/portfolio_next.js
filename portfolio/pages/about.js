import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'

export default function About() {
  return (
    <PageLayout title='About Jordi'>

    <div className={styles.container}>
      <h1>About me</h1>
    </div>
    </PageLayout>
  )
}
