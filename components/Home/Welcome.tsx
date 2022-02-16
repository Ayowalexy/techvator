import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
// import Image from 'next/image'
import React from 'react'
import Container from '../Container'

function Welcome(): JSX.Element {
  const theme =   useTheme()
  const {roti} = theme.colors.brand
    
  return (
    <Container>
        <Flex p='3.5rem'>
             <Image src='/imgs/home/welcome-2x.png' pr='10rem' transform='translateY(9rem)' />

             <Box maxW='44rem'>
                 <Text fontSize='1.8rem' lineHeight='2'>
                     YOU possess, everything and more it takes to claim your rightful place in the upper-class and distinguished-master class of Achievement – no one can or will ever take away from you…
                 </Text>
                 <Box my='3rem'>
                    <Text fontSize='1.8rem' fontStyle='italic' lineHeight='2' color={roti}>
                        Keep ﬂying...
                    </Text>
                    <Text fontSize='1.8rem' fontStyle='italic' lineHeight='2' color={roti}>
                        Keep going...
                    </Text>
                    <Text fontSize='1.8rem' fontStyle='italic' lineHeight='2' color={roti}>
                        Dominating - higher than the sky…
                    </Text>
                 </Box>
                
                 <Text fontSize='1.8rem' lineHeight='2'>
                    Take your throne and be thrown much higher than the sky can dare to throw you!
                 </Text>
             </Box>
        </Flex>

    </Container>
  )
}

export default Welcome