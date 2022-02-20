import { Box, useTheme } from "@chakra-ui/react"
import { ReactNode } from "react"
import Container from "./Container"

type WrapperProps = {
    children: ReactNode
}

function Wrapper({ children }: WrapperProps): JSX.Element {
   const theme  =  useTheme()
   const {black, white} = theme.colors.brand
  return (
    <Container pos='relative' minH='calc(100vh - (79.5px + 4.5rem - 27px))' bgColor={black} bg='url("/imgs/topbanner.jpg")' mt='-4.5rem' py='5rem' bgRepeat='no-repeat'  bgSize='cover' bgPos='100% 40%'>
        <Box pointerEvents='none' w='45rem' h='28rem' pos='absolute' bottom='0' right='0' bg={white} opacity='0.3' zIndex={1} />
        <Box pointerEvents='none' w='45rem' h='100%' pos='absolute' bottom='0' right='0' bgGradient={`linear(to-l, ${white}, transparent)`} opacity='0.3' zIndex={1} />
        {children}
    </Container>
  )
}

export default Wrapper