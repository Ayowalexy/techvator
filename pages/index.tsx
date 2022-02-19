import { Heading, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import AmahlubistStyle from '../components/Home/AmahlubistStyle'
import Hero from '../components/Home/Hero'
import TheAmahlubist from '../components/Home/TheAmahlubist'
import Welcome from '../components/Home/Welcome'
import Layout from '../components/Layout'

export default function Home():JSX.Element {
  return (
    <div>
      <Head>
        <title>Welcome - </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <>
          <Hero />
          <Welcome />
          <TheAmahlubist />
          <AmahlubistStyle />
          <ContactSection />
          <Footer />
          </>
      </Layout>
    </div>
  )
}
