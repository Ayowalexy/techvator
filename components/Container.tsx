import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type ContainerProps = BoxProps & {
   children: JSX.Element
}

function Container({ children, ...rest}: ContainerProps): JSX.Element {
  return (
    <Box px='2.4rem' {...rest}>
        {children}
    </Box>
  )
}

export default Container