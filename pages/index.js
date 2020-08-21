import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero, NavBar, Services, Works } from "../components";

export default function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Voxxer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Works />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  );
}
