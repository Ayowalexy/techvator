import { Box, Flex, Text, useTheme, Link } from '@chakra-ui/react'

import Container from './Container'
import { FacebookIcon, InstagramIcon } from './Socials'

function Footer() {
    const theme = useTheme()
    const { metallicSunburst } = theme.colors.brand
  return (
    <Container bg={metallicSunburst}>
        <Flex py='3rem' alignItems='center' justifyContent='space-between'>
            <Text >{new Date().getFullYear().toString() +  ' AmaHulbi | All rights reserved.'}</Text>
            <Flex>
                <Link href="#" mr='1.6rem'>
                   <FacebookIcon />
                </Link>
                <Link href='#'>
                    <InstagramIcon color={metallicSunburst} />
                </Link>

            </Flex>
        </Flex>
    </Container>
  )
}

export default Footer