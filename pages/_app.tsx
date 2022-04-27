import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/themes";
import "../styles/globals.css";
import Fonts from "../components/Fonts";
import { GlobalProvider } from "context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        <Fonts />
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
