import { AnimatePresence } from 'framer-motion'
import { Rubik } from '@next/font/google'

import '../styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import Navbar from "../components/navbar"

const pageFont = Rubik({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={pageFont.className}>
      <div className="flex flex-col h-screen">
        
        <Navbar/>
        <AnimatePresence mode="wait" initial="false">
          <div className="flex-grow main">
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </div>
    </main>
  )
}