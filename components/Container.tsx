import { Box, BoxProps } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'

type ContainerProps = BoxProps 

function Container({ children, ...rest}: ContainerProps): JSX.Element {
 const theme =  useTheme()
 const {black} = theme.colors.brand

  return (
    <Box bgColor={black} px='2.4rem' {...rest}>
        {children}
    </Box>
  )
}

export default Container