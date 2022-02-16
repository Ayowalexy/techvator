import Container from "./Container"
import { ReactNode, ReactPropTypes } from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header"
import Navigation from "./Navigation"

type LayoutProps= {
    children: JSX.Element
}

function Layout({ children }: LayoutProps ): JSX.Element {
  return (
    <Box>
      <Header />
      <Navigation />
        {children}
    </Box>
  )
}

export default Layout