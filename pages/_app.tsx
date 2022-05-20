import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/themes";
import "../styles/globals.css";
import Fonts from "../components/Fonts";
import { GlobalProvider } from "context/GlobalContext";
import { NextPageContext } from "next";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [root, setRoot] = useState(null);
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

  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        {/* @ts-ignore */}
        <RecoilizeDebugger root={root} />
        <Fonts />
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
