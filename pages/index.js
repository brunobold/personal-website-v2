import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GridLayout from "../components/grid"
import Layout from "../components/Layout";

// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false; /* eslint-disable import/first */

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Bruno Bold</title>
      <meta name="description" content="Home Page of BrunoBold.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
        <main className={styles.main}>
          <GridLayout/>
        </main>
    </Layout>
    </>
  )
}