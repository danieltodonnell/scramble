import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Scramble!  Crush your loved ones with letters and words!
        </h1>

        <p className={styles.description}>
          Start a game and get going...
        </p>

        <div className={styles.grid}>
          <a href="/game/new" className={styles.card}>
            <h2>Start a game</h2>
            <p>Start crushing!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Join a game</h2>
            <p>Continue crushing!!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>See your stats</h2>
            <p>How much have you crushed?</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Your Account</h2>
            <p>
              Set your crushing preferences.
            </p>
          </a>
        </div>
      </main>


    </div>
  )
}
