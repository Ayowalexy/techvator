import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/themes";
import "../styles/globals.css";
import CustomStyle from "../components/CustomStyle";
import { GlobalProvider } from "context/GlobalContext";

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

  return (
    <ChakraProvider resetCSS theme={theme}>
      <RecoilRoot>
        {/* @ts-ignore */}
        <RecoilizeDebugger root={root} />
        <CustomStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default MyApp;
