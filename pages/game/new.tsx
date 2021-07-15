import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          New Game
        </h1>
      </main>


      <div className={styles.grid}>
        <p className={styles.description}>
          Start a game and get going...
        </p>
      </div>
    </div>
  )
}
