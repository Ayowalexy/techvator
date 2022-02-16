import Container from "./Container"
import { ReactNode, ReactPropTypes } from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header"

type LayoutProps= {
    children: JSX.Element
}

function Layout({ children }: LayoutProps ): JSX.Element {
  return (
    <Box>
      <Header />
        {children}
    </Box>
  )
}

export default Layout