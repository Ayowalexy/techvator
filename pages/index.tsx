import { Heading, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home():JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Stack>
        <Heading>The spectacle before us was indeed sublime.</Heading>
        <Text>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath was dished out, and
          the car seemed to float in the middle of an immense dark sphere, whose
          upper half was strewn with silver. Looking down into the dark gulf
          below, I could see a ruddy light streaming through a rift in the
          clouds.
        </Text>
      </Stack>
      </main>
    </div>
  )
}
