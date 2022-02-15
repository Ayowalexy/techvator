import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/themes'
import '../styles/globals.css'
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
     <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Component {...pageProps} />
     </ChakraProvider>
  )
}

export default MyApp
