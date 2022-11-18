import Head from 'next/head'
import Image from 'next/image'
import { Hero } from './components/Hero'
import {Raleway, Open_Sans} from "@next/font/google"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Object Media Digitama - Multimedia & Network Solution</title>
        <meta name="Object Media Digitama, Proposal Optimasi Konten, SosMed, Web & Jasa Pembuatan Video Profile
" content="Memberikan solusi yang inovatif bagi instansi pemerintah, BUMN, dan Perusahaan Swasta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
