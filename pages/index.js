import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// https://youtu.be/CMx51wpd7g4?t=7185 - 2:00:00;

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Nick | Moros#0741
        </title>
        <meta name="description" content="Nick | Moros#0741" />
        <link rel="icon" href="/nick.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
