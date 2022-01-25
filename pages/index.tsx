import Head from 'next/head'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import Omnie from '../components/Omnie'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Aleksandra Skrzypek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Omnie />
      <Portfolio />
      <Footer />
      
    </div>
  )
}
