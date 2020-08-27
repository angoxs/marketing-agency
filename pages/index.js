import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Hero,
  NavBar,
  Services,
  Works,
  NextLevel,
  Clients,
  FooterClip,
  Footer,
} from "../components";
import Info from "../components/Info/Info";
import Basic from "../components/Basic";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Voxxer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8357088.js"
      ></script>

      <Hero />
      <Services />
      <Works />
      <NextLevel />
      <Clients />
      <Info />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel 🖤
        </a>
      </footer> */}
    </Layout>
  );
}
