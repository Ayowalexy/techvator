import { Box, Heading } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'
import Container from '../Container'

function AmahlubistStyle() {
    const theme = useTheme()
    const { white} = theme.colors.brand
  return (
    <Container pt='10rem' pb='5rem'  bg='url("/imgs/life-style-section-01.jpg")' bgSize='cover' bgRepeat='no-repeat'>
                <Box pos='relative' zIndex={2}>
            <Heading as='h3' my='3rem' color={white} fontSize='3.1rem' fontFamily='Century Gothic' fontWeight='600' textAlign='center'> 
                Meet 'THE' Amahlubists 
            </Heading>
            {/* <Grid gap='2rem' mt='5rem' px='3rem' templateColumns="repeat(auto-fit,minmax(18rem, 1fr))">
                {
                    theAmahlubist.map((user, idx) => {
                       return (
                       <Box mx='auto' key={idx}>
                            {renderTheAmahlubist(user)}
                        </Box>
                       )
                    })
                }
            </Grid> */}
        </Box>
    </Container>
  )
}

export default AmahlubistStyle