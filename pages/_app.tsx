import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/themes";
import "../styles/globals.css";
import CustomStyle from "../components/CustomStyle";
import { GlobalProvider } from "context/GlobalContext";
import { NextPageContext } from "next";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const RecoilizeDebugger = dynamic(
    () => {
      return import("recoilize");
    },
    { ssr: false }
  );

  useEffect(() => {
    if (typeof window.document !== "undefined") {
      setRoot(document.getElementById("__next"));
    }
  }, [root]);

  const queryClent = useRef(new QueryClient())


  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        {/* @ts-ignore */}
        <RecoilizeDebugger root={root} />
        {/* <Fonts /> */}
        <QueryClientProvider client={queryClent.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
